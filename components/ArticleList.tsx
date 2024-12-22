'use client'

import { useSidebar } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { Article } from '../data/articles'

function ArticleCard({ article }: { article: Article }) {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  
  return (
    <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 border-b pb-4 transition-all duration-300 ${
      isCollapsed ? 'w-full' : 'w-full'
    }`}>
      <div className="flex-1">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <span>#{article.tags?.[0]?.name || ''}</span>
          <span>{article.date}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-2">{article.description}</p>
        <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:underline">Continue Reading</Link>
      </div>
      <div className={`w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 transition-all duration-300 ${
        isCollapsed ? 'sm:w-1/2 lg:w-1/3' : 'sm:w-1/3 lg:w-1/4'
      }`}>
        <div className={`relative ${
          isCollapsed ? 'aspect-video' : 'h-[150px]'
        } transition-all duration-300 overflow-hidden`}>
          <Image 
            src={article.image} 
            alt={article.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover" 
          />
        </div>
      </div>
    </div>
  )
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-8">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

