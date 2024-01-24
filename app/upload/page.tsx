import prisma from '@/util/prisma'
import { redirect } from 'next/navigation'

function Upload({ searchParam }: { searchParam: { message: string } }) {
  async function posting(data: FormData) {
    'use server'

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

    if (uploadPost) {
      return redirect('/upload?message=success')
    }
    return redirect('/upload?message=something is worng')
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
        <button
          formAction={posting}
          className="px-2 py-1 bg-blue-500 text-white mt-2 text-xs rounded-md"
        >
          submit
        </button>
        {searchParam && <p className="text-red-500">{searchParam.message}</p>}
      </div>
    </form>
  )
}

export default Upload
