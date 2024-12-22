'use client'

import { useState } from 'react'
import { PanelLeftIcon, PanelRightIcon } from 'lucide-react'
import { useSidebar } from '@/components/ui/sidebar'
import { Switch } from '@/components/ui/switch'

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabsEn = ['AI', 'Thoughts', 'Products', 'Reviews']
const tabsZh = ['AI', '随想', '产品', '剧评']

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const { toggleSidebar, state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  const [isEnglish, setIsEnglish] = useState(false)

  const tabs = isEnglish ? tabsEn : tabsZh

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <nav className={`sticky top-0 bg-white z-10 p-4 border-b transition-all duration-300 ${
      isCollapsed ? 'w-screen' : 'w-[calc(100vw-400px)]'
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Switch
            checked={isEnglish}
            onCheckedChange={toggleLanguage}
            className="data-[state=checked]:bg-blue-600"
          />
          <span className="text-sm font-medium">
            {isEnglish ? 'EN' : '中文'}
          </span>
        </div>
        <div className="flex space-x-4">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tabsZh[index])}
              className={`${
                activeTab === tabsZh[index]
                  ? 'text-blue-600 font-bold'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button 
          onClick={toggleSidebar} 
          className="text-gray-400 hover:text-gray-600 transition-transform duration-300"
        >
          {isCollapsed ? (
            <PanelLeftIcon className="h-6 w-6" />
          ) : (
            <PanelRightIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  )
}

