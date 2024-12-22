interface TagListProps {
  showTags: boolean;
  tags: string[];
}

export default function TagList({ showTags, tags }: TagListProps) {
  if (!showTags || tags.length === 0) return null;
  
  return (
    <div className="flex space-x-2 mb-4">
      {tags.map(tag => (
        <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
          #{tag}
        </span>
      ))}
    </div>
  )
}

