'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import MainContent from '../components/MainContent'
import NewSection from '../components/NewSection'
import { SidebarProvider } from '../components/ui/sidebar'
import { Article } from '@/data/articles'

export default function Home() {
  const [activeTab, setActiveTab] = useState('AI')
  const [posts, setPosts] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <div className="flex-1 flex flex-col">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainContent activeTab={activeTab} posts={posts} />
        </div>
        <NewSection />
      </div>
    </SidebarProvider>
  )
}

