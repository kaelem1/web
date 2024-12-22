import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// 获取所有文章
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        tags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// 创建新文章
export async function POST(request: Request) {
  try {
    const json = await request.json()
    const { title, content, description, image, tags, slug } = json

    // 创建文章和标签
    const post = await prisma.post.create({
      data: {
        title,
        content,
        description,
        image,
        slug,
        published: true, // 默认发布
        tags: {
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
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post', details: error },
      { status: 500 }
    )
  }
} 