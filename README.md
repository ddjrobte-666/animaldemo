# 🐾 Pet Toy Shop - 宠物玩具电商平台

一个现代化的宠物玩具在线商店，提供完整的电商功能和优秀的用户体验。

## ✨ 主要特性

- 🛍️ **产品管理** - 完整的产品目录、分类、搜索和过滤
- 👤 **用户系统** - 注册、登录、个人资料管理
- 🛒 **购物车** - 实时购物车管理和价格计算
- 💳 **支付集成** - Stripe支付网关集成
- 📦 **订单管理** - 订单追踪、历史记录和状态更新
- ⭐ **评价系统** - 产品评分和用户评论
- 🔐 **安全认证** - JWT令牌和密码加密
- 📊 **管理后台** - 产品、订单、用户管理
- 📱 **响应式设计** - 完美适配所有设备

## 🏗️ 项目架构

```
animaldemo/
├── client/                 # 前端 (Next.js + React)
│   ├── app/               # 应用程序页面和路由
│   ├── components/        # React 组件
│   ├── hooks/            # 自定义 Hooks
│   ├── lib/              # 工具函数和 API 客户端
│   ├── styles/           # 样式文件
│   └── public/           # 静态资源
├── server/                # 后端 (Express + Node.js)
│   ├── src/
│   │   ├── routes/       # API 路由
│   │   ├── controllers/  # 业务逻辑
│   │   ├── models/       # 数据库模型 (Prisma)
│   │   ├── middleware/   # 中间件
│   │   ├── services/     # 业务服务
│   │   └── index.ts      # 应用入口
│   └── prisma/           # 数据库配置
└── README.md
```

## 🚀 快速开始

### 前置条件
- Node.js 18+
- npm 或 yarn
- PostgreSQL 数据库
- Stripe 账户 (用于支付)

### 安装

1. **克隆仓库**
```bash
git clone https://github.com/ddjrobte-666/animaldemo.git
cd animaldemo
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**

创建 `.env.local` 文件在项目根目录：
```
# 数据库
DATABASE_URL=postgresql://user:password@localhost:5432/pet_toy_shop

# API
API_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=http://localhost:3001

# JWT
JWT_SECRET=your_jwt_secret_key_here

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# 邮件
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```

4. **初始化数据库**
```bash
cd server
npx prisma migrate dev --name init
npx prisma db seed
cd ..
```

5. **启动开发服务器**
```bash
npm run dev
```

应用将在以下地址运行：
- 前端: http://localhost:3000
- 后端 API: http://localhost:3001

## 📚 API 文档

### 认证端点
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/logout` - 用户登出
- `GET /api/auth/me` - 获取当前用户信息

### 产品端点
- `GET /api/products` - 获取所有产品
- `GET /api/products/:id` - 获取产品详情
- `GET /api/categories` - 获取所有分类
- `POST /api/products` - 创建产品 (管理员)
- `PUT /api/products/:id` - 更新产品 (管理员)
- `DELETE /api/products/:id` - 删除产品 (管理员)

### 购物车端点
- `GET /api/cart` - 获取购物车
- `POST /api/cart/items` - 添加到购物车
- `PUT /api/cart/items/:id` - 更新购物车项
- `DELETE /api/cart/items/:id` - 从购物车删除

### 订单端点
- `GET /api/orders` - 获取用户订单
- `GET /api/orders/:id` - 获取订单详情
- `POST /api/orders` - 创建订单
- `PUT /api/orders/:id` - 更新订单状态 (管理员)

## 🛠️ 开发

### 添加新页面
```bash
# 在 client/app 中创建新页面
```

### 添加新 API 端点
```bash
# 在 server/src/routes 中创建路由
```

### 运行类型检查
```bash
npm run type-check
```

### 运行代码检查
```bash
npm run lint
```

## 📦 生产部署

### 构建
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

### 部署到 Vercel (前端)
```bash
vercel deploy
```

### 部署到 Railway 或 Heroku (后端)
```bash
git push railway main
```

## 🔐 安全特性

- ✅ JWT 身份认证
- ✅ 密码加密 (bcrypt)
- ✅ HTTPS 强制
- ✅ CORS 配置
- ✅ SQL 注入防护 (Prisma ORM)
- ✅ XSS 防护
- ✅ Rate Limiting

## 📝 许可证

MIT License - 详见 LICENSE 文件

## 👨‍💻 贡献

欢迎提交 Pull Request 或 Issue！

## 📞 支持

有问题？请提交 Issue 或联系我们。

---

**祝你开发愉快！🎉**
