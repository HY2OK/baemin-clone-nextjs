import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/util/prisma'

export async function GET(req: NextRequest) {
  const shopItem = await prisma?.shop.findMany({ take: 10 })
  if (shopItem) {
    return NextResponse.json(shopItem)
  }

  if (shopItem) {
    return NextResponse.json(shopItem)
  }
  return NextResponse.json({ message: 'error' })
}

export async function name(req: NextRequest) {
  const data = await req.formData()
  console.log('data', data)
  return NextResponse.json({ message: `error` })
}
