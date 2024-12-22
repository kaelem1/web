'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface TableOfContents {
  items: {
    title: string
    href: string
  }[]
}

const tableOfContents: TableOfContents = {
  items: [
    { title: 'Organize Your Contacts', href: '#organize' },
    { title: 'Utilize Multimedia Features', href: '#multimedia' },
    { title: 'Be Mindful of Privacy Settings', href: '#privacy' },
    { title: 'Customize Notifications', href: '#notifications' },
    { title: 'Embrace Emojis and GIFs', href: '#emojis' },
    { title: 'Backup Your Conversations', href: '#backup' },
    { title: 'Stay Informed About Updates', href: '#updates' },
    { title: 'Practice Digital Etiquette', href: '#etiquette' },
  ]
}

export default function BlogPost() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -35% 0px'
      }
    )

    const headings = document.querySelectorAll('h2[id], h3[id]')
    headings.forEach((heading) => observer.observe(heading))

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="ml-1">Back</span>
          </Link>
        </div>

        {/* Tag and Title */}
        <div className="text-center mb-8">
          <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm mb-4">
            #工具
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Use Message Apps to Communicate, and Share
          </h1>
          <time className="text-gray-500">
            22 Januari 2024 • 08:45 AM
          </time>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[2/1] mb-12">
          <Image
            src="/images/headphone.jpg"
            alt="Hero image"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Content Layout */}
        <div className="flex gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <nav className="space-y-2">
                {tableOfContents.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 prose prose-gray max-w-none pb-16">
            <section>
              <h2 id="organize" className="text-gray-600 font-normal mb-4">CHAPTER 1</h2>
              <h3 id="what-is-issue" className="text-2xl font-bold mb-6">What is the issue?</h3>
              <p className="mb-6">
                All of the sites we visit today use trackers called cookies. These cookies
                (trackers) always track our internet footprint and collect data about us
                as soon as we accept them. This data includes the sites we visit, our
                shopping habits, our IP address and where we click on websites.
              </p>
              <p className="mb-6">
                Thanks to this data, <mark className="bg-yellow-100">advertisers can profile us</mark> and place spot-on ads.
                Then we keep wondering why the product we talked about a few hours
                ago appeared on our Facebook timeline.
              </p>
              <p className="mb-12">
                The most well-known of these trackers are Facebook and Google. They
                are even fined millions of dollars for cookie consent dark patterns. But
                almost every company continues to use these trackers.
              </p>
            </section>

            <section>
              <h2 id="privacy" className="text-gray-600 font-normal mb-4">CHAPTER 2</h2>
              <h3 id="data-protection" className="text-2xl font-bold mb-6">Data protection</h3>
              <p className="mb-6">
                Before the data protection laws like GDPR and CCPA were enacted,
                companies could place trackers on your browser without your consent.
              </p>
              <p className="mb-6">
                However, thanks to data protection laws, sites are now obliged to inform
                users about cookies (trackers) and cannot track them without the user's
                consent.
              </p>
              <p>
                But designers have learned to get around this law and are using different
                design techniques to make users accept all cookies (trackers) anyway.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

