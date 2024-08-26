'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { JobItem } from '@/types'

interface VacancyListProps {
	vacancies: JobItem[]
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function VacancyList({ vacancies: initialVacancies }: VacancyListProps) {
	const checkbox = useRef<HTMLInputElement>(null)
	const [checked, setChecked] = useState(false)
	const [indeterminate, setIndeterminate] = useState(false)
	const [selectedVacancies, setSelectedVacancies] = useState<JobItem[]>([])
	const [vacancies, setVacancies] = useState(initialVacancies)
	const [sortColumn, setSortColumn] = useState<keyof JobItem | null>(null)
	const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

	useLayoutEffect(() => {
		const isIndeterminate = selectedVacancies.length > 0 && selectedVacancies.length < vacancies.length
		setChecked(selectedVacancies.length === vacancies.length)
		setIndeterminate(isIndeterminate)
		if (checkbox.current) {
			checkbox.current.indeterminate = isIndeterminate
		}
	}, [selectedVacancies, vacancies])

	function toggleAll() {
		setSelectedVacancies(checked || indeterminate ? [] : vacancies)
		setChecked(!checked && !indeterminate)
		setIndeterminate(false)
	}

	const handleSort = (column: keyof JobItem) => {
		const isAsc = sortColumn === column && sortDirection === 'asc'
		setSortDirection(isAsc ? 'desc' : 'asc')
		setSortColumn(column)

		const sortedVacancies = [...vacancies].sort((a, b) => {
			if (a[column] < b[column]) return isAsc ? 1 : -1
			if (a[column] > b[column]) return isAsc ? -1 : 1
			return 0
		})
		setVacancies(sortedVacancies)
	}

	const handleArchiveSelected = async () => {
		try {
			const response = await fetch('/api/archive-job', {
				method: 'POST',
				body: JSON.stringify({ selectedVacancies: selectedVacancies.map(v => v.id) }),
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (!response.ok) {
				throw new Error('Failed to archive selected vacancies')
			}

			const result = await response.json()
			console.log('Vacancies archived successfully:', result)

			// Update the local state to remove archived vacancies
			setVacancies(prevVacancies => prevVacancies.filter(vacancy => !selectedVacancies.includes(vacancy)))
			setSelectedVacancies([])
		} catch (error) {
			console.error('Error archiving vacancies:', error)
			// Handle error (e.g., show an error message to the user)
		}
	}

	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-2xl font-semibold leading-6 text-white">Vacancies</h1>
					<p className="mt-2 text-sm text-gray-300">
						Manage the job vacancies that are currently available. Archived jobs are not shown.
					</p>
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						onClick={handleArchiveSelected}
						disabled={selectedVacancies.length === 0}
						className="block rounded-md bg-white px-3 py-1.5 text-center text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-gray-600 disabled:text-gray-300"
					>
						Archive Selected
					</button>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle">
						<table className="min-w-full divide-y divide-gray-700">
							<thead>
								<tr>
									<th scope="col" className="relative px-7 sm:w-12 sm:px-6">
										<input
											type="checkbox"
											className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-500 bg-gray-900 text-white focus:ring-white focus:ring-offset-gray-900"
											ref={checkbox}
											checked={checked}
											onChange={toggleAll}
										/>
									</th>
									<th
										scope="col"
										className="cursor-pointer py-3.5 pr-3 text-left text-sm font-semibold text-white"
										onClick={() => handleSort('jobname')}
									>
										Job Name {sortColumn === 'jobname' && (sortDirection === 'asc' ? '▲' : '▼')}
									</th>
									<th
										scope="col"
										className="cursor-pointer px-3 py-3.5 text-left text-sm font-semibold text-white"
										onClick={() => handleSort('companyname')}
									>
										Company Name{' '}
										{sortColumn === 'companyname' && (sortDirection === 'asc' ? '▲' : '▼')}
									</th>
									<th
										scope="col"
										className="cursor-pointer px-3 py-3.5 text-left text-sm font-semibold text-white"
										onClick={() => handleSort('jobcategory')}
									>
										Job Category{' '}
										{sortColumn === 'jobcategory' && (sortDirection === 'asc' ? '▲' : '▼')}
									</th>
									<th
										scope="col"
										className="cursor-pointer px-3 py-3.5 text-left text-sm font-semibold text-white"
										onClick={() => handleSort('created_at')}
									>
										Created At{' '}
										{sortColumn === 'created_at' && (sortDirection === 'asc' ? '▲' : '▼')}
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800">
								{vacancies.map(vacancy => (
									<tr
										key={vacancy.id}
										className={selectedVacancies.includes(vacancy) ? 'bg-gray-800' : 'bg-black'}
									>
										<td className="relative px-7 sm:w-12 sm:px-6">
											{selectedVacancies.includes(vacancy) && (
												<div className="absolute inset-y-0 left-0 w-0.5 bg-white" />
											)}
											<input
												type="checkbox"
												className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-500 bg-gray-900 text-white focus:ring-white focus:ring-offset-gray-900"
												value={vacancy.id}
												checked={selectedVacancies.includes(vacancy)}
												onChange={e =>
													setSelectedVacancies(
														e.target.checked
															? [...selectedVacancies, vacancy]
															: selectedVacancies.filter(v => v !== vacancy)
													)
												}
											/>
										</td>
										<td
											className={classNames(
												'whitespace-nowrap py-4 pr-3 text-sm font-medium',
												selectedVacancies.includes(vacancy) ? 'text-white' : 'text-gray-300'
											)}
										>
											{vacancy.jobname}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
											{vacancy.companyname}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
											{vacancy.jobcategory}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
											{new Date(vacancy.created_at).toLocaleDateString()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
