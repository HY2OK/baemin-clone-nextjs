import ShopListSection from '@/components/section/ShopListSection'
import React from 'react'

async function getShopItems() {
  const shopItems = await (await fetch(`http://localhost:3000/api/shop`)).json()

  console.log('shopItems', shopItems)
  return
}

async function Shop() {
  const shopItems = await getShopItems()
  return (
    <div>
      <ShopListSection />
    </div>
  )
}

export default Shop
