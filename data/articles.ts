export interface Tag {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

// 示例数据仅用于开发测试
export const sampleArticles: Article[] = [
  {
    id: 1,
    title: 'Eskom to Implement Power Cuts From Today Until April 20',
    description: 'Eskom to Implement Power Cuts From Today Until April 20 Eskom to Implement Power Cuts From Today Until April 20...',
    content: 'Sample content...',
    image: '/images/headphone.jpg',
    date: 'Feb24 2:00 AM',
    slug: 'eskom-power-cuts',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: [{ id: 1, name: '设计' }]
  },
  {
    id: 2,
    title: 'Another Article Title',
    description: 'This is another article description...',
    content: 'Another sample content...',
    image: '/images/headphone.jpg',
    date: 'Feb24 2:00 AM',
    slug: 'another-article',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: [{ id: 2, name: 'AI' }]
  },
  {
    id: 3,
    title: '产品设计思考',
    description: '深入探讨产品设计的核心原则和最佳实践...',
    content: '关于产品设计的深度思考...',
    image: '/images/headphone.jpg',
    date: 'Feb24 2:00 AM',
    slug: 'product-design-thoughts',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: [{ id: 3, name: '产品' }, { id: 1, name: '设计' }]
  },
  {
    id: 4,
    title: '随想：技术与生活',
    description: '关于技术如何改变我们的生活方式的思考...',
    content: '技术与生活的随想录...',
    image: '/images/headphone.jpg',
    date: 'Feb24 2:00 AM',
    slug: 'tech-life-thoughts',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: [{ id: 4, name: '随想' }, { id: 5, name: '技术' }]
  }
]; 