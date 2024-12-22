interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  tag: string;
  slug: string;
}

export function getUniqueTags(articles: Article[]): string[] {
  const tagSet = new Set(articles.map(article => article.tag));
  return Array.from(tagSet);
}

export function getArticles(category: string): Article[] {
  // This is a placeholder. In a real application, you would fetch this data from an API or database
  const articles = [
    {
      id: 1,
      title: 'Eskom to Implement Power Cuts From Today Until April 20',
      description: 'Eskom to Implement Power Cuts From Today Until April 20 Eskom to Implement Power Cuts From Today Until April 20...',
      image: '/images/headphone.jpg',
      date: 'Feb24 2:00 AM',
      tag: '设计',
      slug: 'eskom-power-cuts'
    },
    {
      id: 2,
      title: 'AI Development Insights',
      description: 'Exploring the latest trends in AI development...',
      image: '/images/headphone.jpg',
      date: 'Feb24 2:00 AM',
      tag: 'AI',
      slug: 'ai-development'
    },
    {
      id: 3,
      title: '产品设计思考',
      description: '深入探讨产品设计的核心原则和最佳实践...',
      image: '/images/headphone.jpg',
      date: 'Feb24 2:00 AM',
      tag: '产品',
      slug: 'product-design-thoughts'
    },
    {
      id: 4,
      title: '随想：技术与生活',
      description: '关于技术如何改变我们的生活方式的思考...',
      image: '/images/headphone.jpg',
      date: 'Feb24 2:00 AM',
      tag: '随想',
      slug: 'tech-life-thoughts'
    }
  ];

  if (category) {
    return articles.filter(article => article.tag === category);
  }
  return articles;
}

