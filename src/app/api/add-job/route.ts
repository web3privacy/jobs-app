import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { verifyMessage } from '@wagmi/core'
import { config } from '@/config'

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
	const signature = formData.get('signature') as string
	const message = formData.get('message') as string

	if (!jobname || !joburl || !companyname || !jobcategory || !wallet || !signature || !message) {
		return NextResponse.json({ message: 'Please fill out all required fields correctly.' }, { status: 400 })
	}

	try {
		const result = await verifyMessage(config, {
			address: wallet as `0x${string}`,
			message: message,
			signature: signature as `0x${string}`,
		})
		if (!result) {
			return NextResponse.json({ message: 'Failed to verify signature.' }, { status: 400 })
		}
	} catch (error) {
		console.log(error)
		return NextResponse.json({ message: 'Failed to verify signature.' }, { status: 400 })
	}

	try {
		const { data, error } = await supabase
			.from('Openings')
			.insert({
				wallet,
				jobname,
				joburl,
				jobcategory,
				jobdescription,
				joblocation,
				companyname,
				companyurl,
			})
			.select()

		if (error) {
			console.error('Error adding job listing:', error)
			if (error.code === '23505') {
				return NextResponse.json(
					{ message: 'An error occurred while adding the job listing: this seems to be a duplicate entry.' },
					{ status: 400 }
				)
			}
			return NextResponse.json(
				{ message: 'An error occurred while adding the job listing. Please try again.' },
				{ status: 500 }
			)
		}
		console.log('Job listing added:', data)
		return NextResponse.json({ message: 'Success! Thanks for adding a vacancy.' }, { status: 200 })
	} catch (error) {
		console.error('Error adding job listing:', error)
		return NextResponse.json(
			{ message: 'An error occurred while adding the job listing. Please try again.' },
			{ status: 500 }
		)
	}
}
