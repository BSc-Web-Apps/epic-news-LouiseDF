import { NavLink, Outlet } from 'react-router'

export default function NewsPage() {
	return (
		<main className="flex flex-col py-24">
			<div className="container">
				<h1 className="text-h1">Latest News</h1>
				<div className="flex space-x-4 py-4">
					<NavLink
						to="local news"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Local News
					</NavLink>

					<NavLink
						to="sport"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Sport
					</NavLink>

					<NavLink
						to="health"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Health
					</NavLink>

					<NavLink
						to="travel"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500 transition-colors hover:text-yellow-300 sm:inline-block'}`
						}
					>
						Travel
					</NavLink>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
