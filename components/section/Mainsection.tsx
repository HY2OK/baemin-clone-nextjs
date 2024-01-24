import React from 'react'
import MainCard from '../card/MainCard'
import DeliveryCard from '../card/DeliveryCard'
import Link from 'next/link'

function Mainsection() {
  const property = [
    {
      title: '배달',
      description: '세상에 넓고 맛집은 없다',
      imageUrl: '/images/delivery.webp',
    },
    {
      title: 'B마트',
      description: '장보기도 더 빠르게',
      imageUrl: '/images/market.webp',
    },
    {
      title: '배민스토어',
      description: '배달은 지금 옵니다',
      imageUrl: '/images/store.webp',
    },
  ]

  return (
    <section className="h-full flex flex-col">
      <div className="flex">
        {property.map((value: any, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
      <DeliveryCard />
    </section>
  )
}

export default Mainsection
