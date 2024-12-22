import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// 获取所有标签
export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      include: {
        _count: {
          select: {
            posts: true,
          },
        },
      },
    })
    return NextResponse.json(tags)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tags' },
      { status: 500 }
    )
  }
}

// 创建新标签
export async function POST(request: Request) {
  try {
    const json = await request.json()
    const { name } = json

    const tag = await prisma.tag.create({
      data: {
        name,
      },
    })

    return NextResponse.json(tag)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create tag' },
      { status: 500 }
    )
  }
} 