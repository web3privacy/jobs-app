import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '')

export async function GET() {
	const { data, error } = await supabase
		.from('Openings')
		.select()
		.is('archived_on', null)
		.order('created_at', { ascending: false })
	if (error) {
		console.error('Error fetching job listings:', error)
		return NextResponse.json(
			{ message: 'An error occurred while fetching job listings. Please try again.' },
			{ status: 500 }
		)
	}
	return NextResponse.json(data)
}
