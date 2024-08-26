export type JobItem = {
	id: string
	jobname: string
	companyname: string
	companyurl: string
	joburl: string
	jobcategory: string
	created_at: string
	archived_at: string
}

export type JobItemProps = {
	item: JobItem
}
