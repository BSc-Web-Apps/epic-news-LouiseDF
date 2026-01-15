import { data, type MetaFunction, useLoaderData } from 'react-router'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'

import hero from '~/assets/jpg/sample-hero.jpg'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const generalArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const techArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: { slug: 'technology' },
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const entertainmentArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: { slug: 'entertainment' },
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const buisnessArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: { slug: 'business' },
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	return data({
		generalArticles,
		techArticles,
		entertainmentArticles,
		buisnessArticles,
	})
}

export default function Index() {
	const {
		generalArticles,
		techArticles,
		entertainmentArticles,
		buisnessArticles,
	} = useLoaderData<typeof loader>()

	const hasGeneralArticles = generalArticles.length > 0
	const hasTechArticles = techArticles.length > 0
	const hasEntertainmentArticles = entertainmentArticles.length > 0
	const hasBuisnessArticles = buisnessArticles.length > 0

	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega text-blue-800">Epic News</h1>

			<div className="w-full py-16">
				<HeroCallToAction image={hero} imageRight={true}>
					<div className="flex flex-col gap-8">
						<h2 className="text-h2 px-8 text-blue-500">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest local news across the islands.
						</p>
					</div>
				</HeroCallToAction>
			</div>

			<div className="container py-16">
				<h2 className="text-h2 mb-8 font-normal">General</h2>
			</div>
			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{hasGeneralArticles ? (
					generalArticles.map((article) => {
						return (
							<div key={article.id} className="col-span-2 row-span-2">
								<ArticleCard
									articleId={article.id}
									title={article.title}
									category={article.category?.name}
								/>
							</div>
						)
					})
				) : (
					<p>No articles found</p>
				)}
			</div>

			<div className="container py-16">
				<h2 className="text-h2 mb-8 font-normal">Technology</h2>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{hasTechArticles ? (
						techArticles.map((article) => {
							return (
								<div key={article.id} className="col-span-2 row-span-2">
									<ArticleCard
										articleId={article.id}
										title={article.title}
										category={article.category?.name}
									/>
								</div>
							)
						})
					) : (
						<p>No articles found</p>
					)}
				</div>

				<h2 className="text-h2 mb-8 font-normal">Entertainment</h2>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{hasEntertainmentArticles ? (
						entertainmentArticles.map((article) => {
							return (
								<div key={article.id} className="col-span-2 row-span-2">
									<ArticleCard
										articleId={article.id}
										title={article.title}
										category={article.category?.name}
									/>
								</div>
							)
						})
					) : (
						<p>No articles found</p>
					)}
				</div>

				<h2 className="text-h2 mb-8 font-normal">Buisness</h2>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{hasBuisnessArticles ? (
						buisnessArticles.map((article) => {
							return (
								<div key={article.id} className="col-span-2 row-span-2">
									<ArticleCard
										articleId={article.id}
										title={article.title}
										category={article.category?.name}
									/>
								</div>
							)
						})
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>
		</main>
	)
}
