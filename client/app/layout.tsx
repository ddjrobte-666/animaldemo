import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🐾 宠物玩具店 - 高质量宠物玩具在线购物',
  description: '为您的宠物提供最好的玩具和配件，安全、有趣、耐用。',
  keywords: '宠物玩具, 狗玩具, 猫玩具, 宠物配件, 在线购物',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* 导航栏 */}
          <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-primary">🐾 PetToy</h1>
              <ul className="flex gap-8">
                <li><a href="/" className="hover:text-primary">首页</a></li>
                <li><a href="/products" className="hover:text-primary">产品</a></li>
                <li><a href="/cart" className="hover:text-primary">购物车</a></li>
                <li><a href="/account" className="hover:text-primary">账户</a></li>
              </ul>
            </div>
          </nav>

          {/* 主要内容 */}
          <main className="flex-1">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="bg-dark text-white mt-16">
            <div className="container py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">关于我们</h3>
                  <p className="text-gray-400 text-sm">为您的宠物提供最优质的玩具和配件。</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">快速链接</h3>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li><a href="/" className="hover:text-white">首页</a></li>
                    <li><a href="/products" className="hover:text-white">产品</a></li>
                    <li><a href="/about" className="hover:text-white">关于</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">客户服务</h3>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li><a href="/contact" className="hover:text-white">联系我们</a></li>
                    <li><a href="/faq" className="hover:text-white">常见问题</a></li>
                    <li><a href="/returns" className="hover:text-white">退货政策</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">联系信息</h3>
                  <p className="text-gray-400 text-sm">邮箱: support@pettoy.com</p>
                  <p className="text-gray-400 text-sm">电话: 400-123-4567</p>
                </div>
              </div>
              <hr className="border-gray-700 mb-4" />
              <p className="text-center text-gray-400 text-sm">© 2024 宠物玩具店. 版权所有。</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
