import Image from 'next/image'
import React from 'react'

function MainCard({ property }: { property: any }) {
  return (
    <>
      <div className="relative w-full p-2 justify-between gap-2">
        <div className="p-2 w-full h-32 bg-white rounded-xl">
          <div className="flex flex-col w-full ">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p className="w-24">{property.description}</p>
          </div>
        </div>

        <Image
          src={property.imageUrl}
          alt={property.title}
          width={32}
          height={32}
          className="absolute right-4 bottom-4 bg-slate-500 rounded-full"
        />
      </div>
    </>
  )
}

export default MainCard
