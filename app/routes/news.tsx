import { NavLink, Outlet } from 'react-router'

export default function NewsPage() {
	return (
		<main className="flex flex-col gap-4 py-24">
			<div className="container">
				<h1 className="text-h1">Latest News</h1>
				<div className="flex space-x-4 py-4">
					<NavLink
						to="Buisness"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Buisness
					</NavLink>

					<NavLink
						to="entertainment"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Entertainment
					</NavLink>

					<NavLink
						to="Technology"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Technology
					</NavLink>

					<NavLink
						to="general News"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						General News
					</NavLink>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
