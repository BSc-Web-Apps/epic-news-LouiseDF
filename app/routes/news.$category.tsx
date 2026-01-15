import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'
import { toTitleCase } from '~/utils/stringUtils.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'Category not found')
	const categoryTitle = toTitleCase(category)

	const filteredArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: category, // Retrieves only articles in the specified category
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return data({ categoryTitle, filteredArticles })
}

export default function NewsCategoryPage() {
	const { categoryTitle, filteredArticles } = useLoaderData<typeof loader>()
	const hasArticles = filteredArticles.length > 0

	console.log({ filteredArticles, hasArticles })

	return (
		<div className="container py-16">
			<h2 className="text-h2 m-8 flex gap-8">{categoryTitle}</h2>
			<div className="m-8 grid gap-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{filteredArticles.map((article) => (
					<ArticleCard
						key={article.id}
						articleId={article.id}
						title={article.title}
						category={article.category?.name}
					/>
				))}
			</div>
			<div className="text-h4 m-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				There is no {categoryTitle} Articles
			</div>
		</div>
	)
}
