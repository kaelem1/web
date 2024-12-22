import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

interface RouteParams {
  params: {
    id: string
  }
}

// 获取单个文章
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(params.id),
      },
      include: {
        tags: true,
      },
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

// 更新文章
export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const json = await request.json()
    const { title, content, description, image, tags, published } = json

    const post = await prisma.post.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        title,
        content,
        description,
        image,
        published,
        tags: {
          set: [], // 清除现有标签
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
      include: {
        tags: true,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

// 删除文章
export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    await prisma.post.delete({
      where: {
        id: parseInt(params.id),
      },
    })

    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    )
  }
} 