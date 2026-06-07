import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface AuthRequest extends Request {
  userId?: string
}

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

// 生成 JWT 令牌
export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' })
}

// 验证 JWT 令牌中间件
export const verifyToken = (req: AuthRequest, res: Response, next: any) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ success: false, message: '未授权' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ success: false, message: '令牌无效' })
  }
}

// 用户注册
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
      return res.status(400).json({ success: false, message: '缺少必填字段' })
    }

    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ success: false, message: '邮箱已被使用' })
    }

    // 密码加密
    const hashedPassword = await bcryptjs.hash(password, 10)

    // 创建用户
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    // 创建购物车
    await prisma.cart.create({
      data: { userId: user.id },
    })

    const token = generateToken(user.id)

    res.json({
      success: true,
      message: '注册成功',
      data: { user: { id: user.id, email, name }, token },
    })
  } catch (error) {
    res.status(500).json({ success: false, message: '注册失败' })
  }
}

// 用户登录
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ success: false, message: '缺少必填字段' })
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return res.status(400).json({ success: false, message: '邮箱或密码错误' })
    }

    // 验证密码
    const isPasswordValid = await bcryptjs.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: '邮箱或密码错误' })
    }

    const token = generateToken(user.id)

    res.json({
      success: true,
      message: '登录成功',
      data: { user: { id: user.id, email: user.email, name: user.name }, token },
    })
  } catch (error) {
    res.status(500).json({ success: false, message: '登录失败' })
  }
}

// 获取当前用户
export const getCurrentUser = async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, email: true, name: true, avatar: true, role: true },
    })

    if (!user) {
      return res.status(404).json({ success: false, message: '用户不存在' })
    }

    res.json({ success: true, data: user })
  } catch (error) {
    res.status(500).json({ success: false, message: '获取用户信息失败' })
  }
}

// 更新用户信息
export const updateUser = async (req: AuthRequest, res: Response) => {
  try {
    const { name, avatar } = req.body

    const user = await prisma.user.update({
      where: { id: req.userId },
      data: { ...(name && { name }), ...(avatar && { avatar }) },
      select: { id: true, email: true, name: true, avatar: true },
    })

    res.json({ success: true, message: '更新成功', data: user })
  } catch (error) {
    res.status(500).json({ success: false, message: '更新失败' })
  }
}
