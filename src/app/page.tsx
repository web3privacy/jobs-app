import { Suspense } from 'react'
import JobList from '@/components/JobList'

export default async function Home() {
	return (
		<main className="middle-pane-medium flex flex-col gap-8 md:flex-row">
			<Suspense fallback={<div>Loading...</div>}>
				<JobList />
			</Suspense>
		</main>
	)
}
