import { Toggle, ToggleSkeleton } from './toggle'
import { Wrapper } from './wrapper'

import { Recommended, RecommendedSkeleton } from './recommended'
import { Following, FollowingSkeleton } from './following'

import { getRecommended } from '@/lib/recommmended-service'
import { getFollowersUser } from '@/lib/follow-service'

export const Sidebar = async () => {
	const follows = await getFollowersUser()
	const recommended = await getRecommended()

	return (
		<Wrapper>
			<Toggle />
			<div className="space-y-4 pt-4 lg:pt-0">
				<Following data={follows} />
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	)
}

export const SidebarSkeleton = () => {
	return (
		<aside
			className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r 
			border-[#2d2e35] z-50"
		>
			<ToggleSkeleton />
			<FollowingSkeleton />
			<RecommendedSkeleton />
		</aside>
	)
}
