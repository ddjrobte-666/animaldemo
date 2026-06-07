'use client'

import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: 从 API 获取产品
    const fetchProducts = async () => {
      try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
        // const data = await response.json()
        // setProducts(data)

        // 临时示例数据
        setProducts([
          {
            id: '1',
            name: '弹性球玩具',
            price: 29.99,
            image: '🎾',
            category: '球类',
          },
          {
            id: '2',
            name: '绳结玩具',
            price: 19.99,
            image: '🪢',
            category: '绳类',
          },
          {
            id: '3',
            name: '毛绒玩具',
            price: 39.99,
            image: '🧸',
            category: '毛绒',
          },
        ])
      } catch (error) {
        console.error('获取产品失败:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      {/* 英雄部分 */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">🐾 欢迎来到宠物玩具店</h1>
          <p className="text-xl mb-8">为您的宠物提供最优质的玩具和配件</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:opacity-90">
            开始购物
          </button>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="container my-16">
        <h2 className="text-4xl font-bold mb-8 text-center">热门产品</h2>
        
        {loading ? (
          <div className="text-center py-16">加载中...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">¥{product.price}</span>
                  <button className="btn-primary">加入购物车</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 特色部分 */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">为什么选择我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">高质量产品</h3>
              <p className="text-gray-600">我们只提供安全、耐用的宠物玩具</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">快速配送</h3>
              <p className="text-gray-600">全国24小时内发货</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">价格优惠</h3>
              <p className="text-gray-600">定期打折和会员优惠</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
