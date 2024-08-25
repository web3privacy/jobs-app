import React from 'react'
import { genHeading } from '@/utils/ascii'
import { JobItemProps } from '@/types'

export default function JobItem({ item }: JobItemProps) {
	const jobcategory = item.jobcategory.toLowerCase()

	return (
		<div className={`w3pn-event-item ${jobcategory} all`}>
			<div className="event-header flex">
				<div className="header-base grow gap-4 px-3 py-2.5 sm:flex sm:px-4 sm:py-3">
					<div className="flex justify-center text-[4px] leading-none text-white">
						<pre>
							<code className="layout-heading font-mono">{genHeading(item.jobcategory)}</code>
						</pre>
					</div>
					<div>
						<div className="text-lg font-bold text-white">{item.jobname}</div>
						<div className="flex gap-2 font-mono">
							<a href={item.companyurl}>{item.companyname}</a>
						</div>
					</div>
					<div className="flex grow items-center gap-4 py-1 text-right">
						<div className="grow"></div>
						{item.joburl && (
							<a href={item.joburl} className="button">
								<button>Apply</button>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
