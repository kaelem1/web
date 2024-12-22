'use client'

import { useSidebar } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'

interface MovieReview {
  title: string
  date: string
  mainImage: string
  description: string
  thumbnails: string[]
  slug: string
}

function MovieReviewCard({ review }: { review: MovieReview }) {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <article className={`flex flex-col space-y-6 border-b pb-8 transition-all duration-300 ${
      isCollapsed ? 'w-full' : 'w-full'
    }`}>
      <time className="text-gray-500 text-sm">{review.date}</time>
      
      <div className={`relative aspect-video w-full overflow-hidden rounded-lg transition-all duration-300 ${
        isCollapsed ? 'w-full' : 'w-full'
      }`}>
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
        <Link 
          href={`/movie-reviews/${review.slug}`}
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
        </Link>
      </div>
    </article>
  )
}

export default function MovieReviewList() {
  const movieReviews = [
    {
      title: "For 'Fantastic Beasts' Series, a Case of Diminishing Returns",
      date: "April 17, 2022",
      mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/185%20Pinterest.jpg-zE91gNiUqPemrXfTCo9DdxCI39pq29.jpeg",
      description: "Fantastic Beasts: The Secrets of Dumbledore is currently set to premiere in the United States on April 15, 2022. The movie will be coming out a bit earlier in the UK, arriving in theaters on April 8, 2022.",
      thumbnails: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/185%20Pinterest.jpg-zE91gNiUqPemrXfTCo9DdxCI39pq29.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/185%20Pinterest.jpg-zE91gNiUqPemrXfTCo9DdxCI39pq29.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/185%20Pinterest.jpg-zE91gNiUqPemrXfTCo9DdxCI39pq29.jpeg"
      ],
      slug: "fantastic-beasts-diminishing-returns"
    },
    // Add more movie reviews as needed
  ]

  return (
    <div className="space-y-8">
      {movieReviews.map((review, index) => (
        <MovieReviewCard key={index} review={review} />
      ))}
    </div>
  )
}

