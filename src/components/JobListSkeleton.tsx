export default function JobListSkeleton() {
	return (
		<>
			<div className="animate-pulse">
				<div className="flex w-full flex-row gap-2 overflow-x-auto text-white md:w-64 md:flex-col md:gap-5">
					{[...Array(5)].map((_, index) => (
						<div key={index} className="min-h-10 min-w-44 rounded-full bg-gray-700"></div>
					))}
				</div>
			</div>
			<article className="grow transition-all duration-500">
				<div className="animate-pulse">
					{[...Array(5)].map((_, index) => (
						<div key={index} className={`w3pn-event-item all`}>
							<div className="event-header flex">
								<div className="header-base grow gap-4 px-3 py-2.5 sm:flex sm:px-4 sm:py-3">
									<div className="mb-2 h-4 w-1/4 rounded bg-gray-700"></div>
									<div className="mb-2 h-6 w-3/4 rounded bg-gray-700"></div>
									<div className="h-4 w-1/2 rounded bg-gray-700"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</article>
		</>
	)
}
