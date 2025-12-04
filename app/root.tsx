import { Outlet, useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import FooterLogoCentre from './components/organisms/Footer/FooterLogoCentre.tsx'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import Document from './components/shared-layout/Document.tsx'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react'
import { EpicToaster } from './components/ui/sonner.tsx'
import { useToast } from './components/toaster.tsx'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()
	const theme = useTheme()
	useToast(data?.toast)

	return (
		<AuthenticityTokenProvider token={data?.csrfToken ?? ''}>
			<Document theme={theme} nonce={nonce} honeyProps={data?.honeyProps}>
				<HeaderWithSearch />
				<div className="flex h-screen flex-col justify-between">
					<div className="flex-1">
						<Outlet />
					</div>
					<div className="container flex justify-between pb-5">
						<ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
					</div>
					<FooterLogoCentre />
				</div>
				<EpicToaster
					closeButton
					position="bottom-right"
					theme={theme}
					expand
					richColors
					duration={5000}
				/>
			</Document>
		</AuthenticityTokenProvider>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
