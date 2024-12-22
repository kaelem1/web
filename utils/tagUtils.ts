import { Article } from '../data/articles';

export const getUniqueTags = (articles: Article[]): string[] => {
  const allTags = articles.flatMap(article => article.tags?.map(tag => tag.name) || []);
  return [...new Set(allTags)].sort();
};

export const getArticles = (tag: string | null, articles: Article[]): Article[] => {
  if (!tag) return articles;
  return articles.filter(article => 
    article.tags?.some(t => t.name === tag)
  );
}; 