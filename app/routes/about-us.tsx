import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'

import portrait1 from '~/assets/jpg/portrait-01.jpg'
import portrait2 from '~/assets/jpg/portrait-02.jpg'
import portrait3 from '~/assets/jpg/portrait-03.jpg'

interface TeamMemberCardProps {
	name: string
	role: string
	imageSrc: string
}

export function TeamMemberCard({ name, role, imageSrc }: TeamMemberCardProps) {
	return (
		<div className="w-fit rounded-lg bg-slate-800 p-8">
			<img
				src={imageSrc}
				alt="An employee"
				className="mx-auto h-64 w-64 rounded-full"
			/>

			<div className="pt-6">
				<h3 className="text-center font-semibold text-white">{name}</h3>
				<p className="pt-1 text-center text-slate-400">{role}</p>

				<div className="flex justify-center gap-4 pt-6 text-slate-400">
					<RiTwitterXFill />
					<RiLinkedinBoxFill />
				</div>
			</div>
		</div>
	)
}

export default function AboutUsRoute() {
	return (
		<main className="container py-16">
			<h1 className="text-mega">About us</h1>

			<div className="m-4 flex gap-8">
				<TeamMemberCard
					name="Leonard"
					role="Senior Developer"
					imageSrc={portrait1}
				/>

				<TeamMemberCard
					name="John Smith"
					role="Lead Developer"
					imageSrc={portrait2}
				/>

				<TeamMemberCard
					name="Jane-Doe"
					role="Lead Developer"
					imageSrc={portrait3}
				/>
			</div>
		</main>
	)
}
