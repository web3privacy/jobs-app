'use client'

import { useState, useEffect } from 'react'
import JobItem from '@/components/JobItem'
import JobListSkeleton from '@/components/JobListSkeleton'
import { JobItem as JobItemType } from '@/types' // Import the JobItem type

export default function JobList() {
	const [initialJobs, setInitialJobs] = useState<JobItemType[]>([])
	const [categories, setCategories] = useState<Set<string>>(new Set())
	const [activeFilter, setActiveFilter] = useState('all')
	const [jobs, setJobs] = useState<JobItemType[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchJobs = async () => {
			setIsLoading(true)
			try {
				const res = await fetch('/api/get-jobs')
				if (!res.ok) {
					throw new Error('Failed to fetch jobs')
				}
				const data: JobItemType[] = await res.json()
				setInitialJobs(data)
				setJobs(data)
				const categorySet = new Set(data.map(job => job.jobcategory.toLowerCase()))
				setCategories(categorySet)
			} catch (error) {
				console.error('Error fetching jobs:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchJobs()
	}, [])

	const handleFilterClick = (filter: string) => {
		setActiveFilter(filter)
		if (filter === 'all') {
			setJobs(initialJobs)
		} else {
			const filteredJobs = initialJobs.filter(job => job.jobcategory.toLowerCase() === filter)
			setJobs(filteredJobs)
		}
	}

	if (isLoading) {
		return <JobListSkeleton />
	}

	return (
		<>
			<div className="flex w-full flex-row gap-2 overflow-x-auto text-white md:w-64 md:flex-col md:gap-5">
				<button
					onClick={() => handleFilterClick('all')}
					className={`min-h-10 min-w-44 transform rounded-full transition duration-[1000ms] ease-in-out hover:bg-white hover:text-black ${
						activeFilter === 'all' ? 'border' : ''
					}`}
				>
					All
				</button>
				{Array.from(categories)
					.sort()
					.map(category => (
						<button
							key={category}
							onClick={() => handleFilterClick(category)}
							className={`min-h-10 min-w-44 transform rounded-full font-bold capitalize transition duration-[1000ms] ease-in-out hover:bg-white hover:text-black ${
								activeFilter === category ? 'border' : ''
							}`}
						>
							{category}
						</button>
					))}
			</div>
			<article className="grow transition-all duration-500">
				{jobs.map(job => (
					<JobItem key={job.id} item={job} />
				))}
			</article>
		</>
	)
}
