import { Suspense } from 'react'
import AddJobForm from '@/components/AddJobForm'
import Image from 'next/image'

import unsplashbg from '../../../public/unsplashbg.jpg'

export const metadata = {
	title: 'Admin | Add Job',
}

export default function AddJobPage() {
	return (
		<section>
			<div className="relative flex max-h-full justify-center overflow-hidden md:px-12 lg:px-0">
				<div className="hidden bg-white sm:contents lg:relative lg:block lg:flex-1">
					<div className="absolute inset-0 h-full w-full bg-white object-cover">
						<Image
							src={unsplashbg}
							className="h-full bg-gray-200 object-cover object-center grayscale duration-500 hover:grayscale-0"
							alt="two women facing security camera above mounted on structure"
							width="1310"
							height="873"
						/>
					</div>
				</div>
				<div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 sm:justify-center md:flex-none md:px-28 lg:border-r lg:py-24">
					<div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold tracking-tighter text-gray-900">
								Add a new #privacy job listing,
								<span className="text-gray-600"> help us grow the movement</span>
							</h1>
							<p className="mt-4 text-base font-medium text-gray-500">
								More jobs means more people can join the movement. Help us grow by adding a new job
								listing.
							</p>
						</div>
						<Suspense fallback={<div>Loading...</div>}>
							<AddJobForm />
						</Suspense>
					</div>
				</div>
			</div>
		</section>
	)
}
