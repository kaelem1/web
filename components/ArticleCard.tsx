import Image from 'next/image'
import { useSidebar } from '@/components/ui/sidebar'

interface Article {
  title: string
  description: string
  image: string
  date: string
  tag: string
}

export default function ArticleCard({ article }: { article: Article }) {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  return (
    <div className={`flex space-x-4 border-b pb-4 transition-all duration-300 ${
  isCollapsed ? 'w-screen pr-4' : 'w-[calc(100vw-400px)]'
}`}>
      <div className="flex-1">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <span>#{article.tag}</span>
          <span>{article.date}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-2">{article.description}</p>
        <a href="#" className="text-blue-600 hover:underline">Continue Reading</a>
      </div>
      <div className="flex-shrink-0">
        <Image src={article.image} alt={article.title} width={200} height={150} className="rounded-lg" />
      </div>
    </div>
  )
}

