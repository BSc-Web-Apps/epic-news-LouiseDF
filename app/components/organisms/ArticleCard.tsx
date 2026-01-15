import { Link } from 'react-router'

interface ArticleCardProps {
	title: string
	category?: string
	articleId: string
}

export default function ArticleCard({
	title,
	category,
	articleId,
}: ArticleCardProps) {
	return (
		<Link to={`/article/${articleId}`}>
			<div className="h-40 rounded-lg bg-blue-900 p-4 transition-all hover:scale-105">
				<h3>{title}</h3>
				<p>{category || 'General News'}</p>
			</div>
		</Link>
	)
}
