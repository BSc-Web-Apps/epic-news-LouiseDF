import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'
import { prisma } from '~/utils/db.server.ts'
import { toTitleCase } from '~/utils/stringUtils.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'Category not found')
	const categoryTitle = toTitleCase(category)

	const allArticles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return data({ categoryTitle, allArticles })
}

export default function NewsCategoryPage() {
	const { categoryTitle, allArticles } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="text-h2 m-8 flex gap-8">{categoryTitle}</h2>

			<div className="m-8 grid p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{allArticles.map((article) => (
					<div
						key={article.id}
						className="rounded-xl px-6 py-6 hover:bg-blue-900"
					>
						<h3>{article.title}</h3>
						<p>{article.category?.name || 'General News'}</p>
					</div>
				))}
			</div>

			<div className="m-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"></div>
		</div>
	)
}
