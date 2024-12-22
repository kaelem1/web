'use client'

import { useSidebar } from '@/components/ui/sidebar'
import TagList from './TagList'
import ArticleList from './ArticleList'
import MovieReviewList from './MovieReviewList'
import { Article } from '../data/articles'

interface MainContentProps {
  activeTab: string;
  posts: Article[];
}

export default function MainContent({ activeTab, posts }: MainContentProps) {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  const renderContent = () => {
    switch (activeTab) {
      case 'AI':
      case '随想':
      case '产品':
        const filteredPosts = posts.filter(post => 
          post.tags.some(tag => tag.name === activeTab)
        );
        const tags = Array.from(new Set(
          filteredPosts.flatMap(post => post.tags.map(tag => tag.name))
        ));
        return (
          <>
            <TagList showTags={true} tags={tags} />
            <ArticleList articles={filteredPosts} />
          </>
        );
      case '剧评':
        return <MovieReviewList />;
      default:
        return <ArticleList articles={posts} />;
    }
  }

  return (
    <main className={`flex-1 p-4 overflow-y-auto transition-all duration-300 ${
      isCollapsed ? 'w-screen' : 'w-[calc(100vw-400px)]'
    }`}>
      {renderContent()}
    </main>
  )
}

