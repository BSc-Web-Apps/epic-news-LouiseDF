import { useMatches, Link } from 'react-router'
import { SearchBar } from '#app/components/search-bar.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { UserDropdown } from '#app/components/user-dropdown.tsx'
import { useOptionalUser } from '#app/utils/user.ts'
import logo from '~/assets/png/epic-news-logo.png'

export default function HeaderWithSearch() {
	const matches = useMatches()
	const isOnSearchPage = matches.find((m) => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />
	const user = useOptionalUser()

	return (
		<header className="bg-blue-600 p-6">
			<nav className="flex flex-wrap items-center justify-between gap-4 bg-blue-600 sm:flex-nowrap md:gap-8">
				<Link to="/" className="flex items-center gap-4">
					<div className="flex items-center justify-around gap-4">
						<img src={logo} alt="Epic News Logo" className="w-16" />
						<span className="text-foreground text-3xl font-bold">
							Epic News
						</span>
					</div>
				</Link>

				<div className="flex flex-1 justify-center gap-8"></div>

				<Link
					to="/about-us"
					prefetch="intent"
					className="text-foreground ml-4 hidden text-sm transition-colors hover:text-yellow-300 sm:inline-block"
				>
					About us
				</Link>

				<Link
					to="/news"
					prefetch="intent"
					className="text-foreground ml-4 hidden text-sm transition-colors hover:text-yellow-300 sm:inline-block"
					aria-label="News"
				>
					News
				</Link>

				<Link
					to="/contact-us"
					prefetch="intent"
					className="text-foreground ml-4 hidden text-sm transition-colors hover:text-yellow-300 sm:inline-block"
				>
					Contact Us
				</Link>

				<div className="ml-auto hidden max-w-sm flex-1 sm:block">
					{searchBar}
				</div>
				<div className="flex items-center gap-10">
					{user ? (
						<UserDropdown />
					) : (
						<Button asChild variant="default" size="lg">
							<Link to="/login">Log In</Link>
						</Button>
					)}
				</div>
				<div className="block w-full sm:hidden">{searchBar}</div>
			</nav>
		</header>
	)
}
