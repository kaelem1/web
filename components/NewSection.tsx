'use client'

import { NewCardFront } from './NewCardFront'
import { NewCardBack } from './NewCardBack'
import { useSidebar } from '@/components/ui/sidebar'
import { Sparkles } from 'lucide-react'
import { Article } from '../data/articles'

export default function NewSection() {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  const newArticles: Article[] = [
    {
      id: 1,
      title: '产品吐槽 #1',
      description: '这是文本这是文本这是文本这是文本这是文...',
      image: '/images/headphone.jpg',
      date: 'Feb24 2:00 AM',
      tags: [{ id: 1, name: '吐槽' }],
      slug: 'product-review-1',
      content: '这是文本这是文本这是文本这是文本这是文...',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Another New Article',
      description: 'This is another new article description...',
      image: '/images/headphone.jpg',
      date: 'Feb24 2:00 AM',
      tags: [{ id: 2, name: 'Review' }],
      slug: 'another-new-article',
      content: 'This is another new article content...',
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  return (
    <div className={`fixed top-0 right-0 w-96 min-w-[400px] h-screen overflow-y-auto bg-gray-100 transition-all duration-300 ${
      isCollapsed ? 'translate-x-full' : 'translate-x-0'
    }`}>
      <div className="sticky top-0 bg-gradient-to-b from-gray-100 to-transparent pb-4 pt-4 px-4">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          New
        </h2>
      </div>
      <div className="px-4 space-y-4 relative h-[400px]">
        <NewCardFront article={newArticles[0]} />
        <NewCardBack article={newArticles[1]} />
      </div>
    </div>
  )
}

