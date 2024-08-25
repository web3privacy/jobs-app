import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '')

export async function POST(request: Request) {
	const formData = await request.formData()
	const jobname = formData.get('vacancy') as string
	const joburl = formData.get('url') as string
	const jobcategory = formData.get('jobcategory') as string
	const jobdescription = formData.get('jobdescription') as string
	const joblocation = formData.get('joblocation') as string
	const companyname = formData.get('company') as string
	const companyurl = formData.get('companyurl') as string
	const wallet = formData.get('wallet') as string

	if (!jobname || !joburl || !companyname || !jobcategory || !wallet) {
		return NextResponse.json({ message: 'Please fill out all required fields correctly.' }, { status: 400 })
	}

	try {
		const { data, error } = await supabase
			.from('Openings')
			.insert([
				{
					wallet,
					jobname,
					joburl,
					jobcategory,
					jobdescription,
					joblocation,
					companyname,
					companyurl,
				},
			])
			.select()

		if (error) {
			console.error('Error adding job listing:', error)
			return NextResponse.json(
				{ message: 'An error occurred while adding the job listing. Please try again.' },
				{ status: 500 }
			)
		}
		console.log('Job listing added:', data)

		return NextResponse.json({ message: 'Success! Thanks for adding a vacancy.' }, { status: 200 })
	} catch (error) {
		if (
			error instanceof Error &&
			error.message.includes('SQL_QUERY_FAILED: Openings.companyname, Openings.jobname')
		) {
			return NextResponse.json(
				{ message: 'An error occurred while adding the job listing: this seems to be a duplicate entry.' },
				{ status: 400 }
			)
		} else {
			return NextResponse.json(
				{ message: 'An error occurred while adding the job listing. Please try again.' },
				{ status: 500 }
			)
		}
	}
}
