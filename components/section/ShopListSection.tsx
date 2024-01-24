import Link from 'next/link'
import ShopCard from '../card/ShopCard'
import { Shop } from '@prisma/client'

function ShopListSection() {
  return (
    <section className="p-4">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <h2>배달</h2>
        </div>
        <Link href={'/upload'}>upload</Link>
      </div>
      <div className="w-full bg-gray-300 flex h-1 my-2">
        {/* shop list */}
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 19].map((shop: any, index) => (
            <Link href={`/shop/${shop.id}`} key={index}>
              <ShopCard shop={shop} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopListSection
