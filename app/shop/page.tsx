import ShopListSection from '@/components/section/ShopListSection'
import React from 'react'

async function getShopItems() {
  const shopItems = await (
    await fetch(`http://localhost:3000/api/shop`, {
      cache: 'no-cache',
    })
  ).json()

  return shopItems
}

async function Shop() {
  const shopItems = await getShopItems()
  console.log(shopItems)
  return (
    <div>
      <ShopListSection shops={shopItems} />
    </div>
  )
}

export default Shop
