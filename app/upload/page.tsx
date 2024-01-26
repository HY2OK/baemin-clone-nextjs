import prisma from '@/util/prisma'
import { redirect } from 'next/navigation'

function Upload({ searchParam }: { searchParam: { message: string } }) {
  async function posting(data: FormData) {
    'use server'

    const success = await fetch(`http://localhost:3000/api/shop`, {
      method: 'post',
      body: data,
    })

    if (!success) {
      redirect('/upload?message=something is wrong')
    }

    for (var i = 0; i < 10; i++) {
      const uploadPost = await prisma.shop.create({
        data: {
          title: data.get('title')?.toString() as string,
          description: data.get('description')?.toString() as string,
          star: parseInt(data.get('star')?.toString() as string),
          deliveryTime: data.get('deliveryTime')?.toString() as string,
          deliveryFee: data.get('deliveryFee')?.toString() as string,
          minumumOrder: parseInt(data.get('minumumOrder')?.toString() as string),
          cardImage: data.get('cardImage')?.toString() as string,
          coverImage: data.get('coverImage')?.toString() as string,
          tags: data.get('tags')?.toString() as string,
        },
      })
    }
  }

  return (
    <form
      className="w-full h-screen flex justify-center items-center"
      action={`/api/shop`}
    >
      <div className="border border-black rounded-md p-8">
        <h2 className="text-3xl font-bold">업로드</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="">title</label>
          <input type="text" name="title" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">description</label>
          <input type="text" name="description" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">star</label>
          <input type="number" name="star" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">deliveryTime</label>
          <input type="text" name="deliveryTime" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">deliveryFee</label>
          <input type="text" name="deliveryFee" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">minumumOrder</label>
          <input type="number" name="minumumOrder" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">cardImage</label>
          <input type="text" name="cardImage" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">coverImage</label>
          <input type="text" name="coverImage" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">tags</label>
          <input type="text" name="tags" />
        </div>
        <div>
          <button className="px-2 py-1 bg-blue-500 text-white text-xs mt-2 rounded-md">
            submit
          </button>
          <button
            className="px-2 py-1 bg-blue-500 text-white text-xs mt-2 rounded-md"
            formAction={posting}
          >
            action
          </button>
        </div>
        {/* {searchParam && <p className="text-red-500">{searchParam.message}</p>} */}
      </div>
    </form>
  )
}

export default Upload
