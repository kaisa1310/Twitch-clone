import Image from 'next/image'

import { UserAvatar } from '@/components/userAvatar'
import { Skeleton } from '@/components/ui/skeleton'
import { LiveBadge } from '@/components/liveBadge'

interface ThumbnailProps {
	src: string | null
	fallback: string
	isLive: boolean
	username: string
}

export const Thumbnail = ({ src, fallback, isLive, username }: ThumbnailProps) => {
	let content

	if (!src) {
		content = (
			<div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
				<UserAvatar size="lg" showBadge username={username} isLive={isLive} imageUrl={fallback} />
			</div>
		)
	} else {
		content = (
			<div className="">
				<Image
					src={src}
					fill
					alt="Thumbnail"
					className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md"
				/>
			</div>
		)
	}

	return (
		<div className="group aspect-video relative rounded-md cursor-pointer">
			<div className="rounded-md absolute inset-0 bg-blue-600/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
			{content}
			{isLive && src && (
				<div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
					<LiveBadge />
				</div>
			)}
		</div>
	)
}

export const ThumbnailSkeleton = () => {
	return (
		<div className="group aspect-video relative rounded-md">
			<Skeleton className="h-full w-full" />
		</div>
	)
}
