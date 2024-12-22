'use client'

import Image from 'next/image'
import { useSidebar } from '@/components/ui/sidebar'

interface MovieReview {
  title: string
  date: string
  mainImage: string
  description: string
  thumbnails: string[]
}

export default function MovieReviewCard({ review }: { review: MovieReview }) {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <article className={`flex flex-col space-y-6 border-b pb-8 transition-all duration-300 ${
      isCollapsed ? 'w-full' : 'w-[calc(100%-400px)]'
    }`}>
      <time className="text-gray-500 text-sm">{review.date}</time>
      
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image 
          src={review.mainImage} 
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold leading-tight">{review.title}</h2>
        <p className="text-gray-700 leading-relaxed">{review.description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {review.thumbnails.map((thumbnail, index) => (
          <div key={index} className="relative aspect-video overflow-hidden rounded-md">
            <Image 
              src={thumbnail} 
              alt=""
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <div>
        <a 
          href="#" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
        >
          Continue Reading
          <svg 
            className="ml-1 h-4 w-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </article>
  )
}

