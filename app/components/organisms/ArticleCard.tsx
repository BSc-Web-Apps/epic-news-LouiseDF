interface ArticleCardProps {
	title: string
	category?: string
}

export default function ArticleCard({ title, category }: ArticleCardProps) {
	return (
		<div className="rounded-lg bg-blue-900 p-4 transition-all hover:scale-105">
			<h3>{title}</h3>
			<p>{category || 'General News'}</p>
		</div>
	)
}
