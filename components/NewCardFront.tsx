import Image from 'next/image'
import Link from 'next/link'
import { Article } from '../data/articles'

export function NewCardFront({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <div className="absolute w-full transition-all duration-500 scale-[0.85] z-20 top-0 bg-white rounded-lg overflow-hidden shadow hover:scale-[0.86] cursor-pointer">
        <div className="p-3">
          <Image 
            src={article.image} 
            alt={article.title} 
            width={400} 
            height={300} 
            className="w-full h-48 rounded-lg object-cover" 
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
              #{article.tags?.[0]?.name || ''}
            </span>
            <time className="text-gray-500 text-xs">{article.date}</time>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-sm text-gray-700 mb-2 line-clamp-3">{article.content || article.description}</p>
          <span className="text-blue-600 text-sm hover:underline">Continue Reading</span>
        </div>
      </div>
    </Link>
  )
}

