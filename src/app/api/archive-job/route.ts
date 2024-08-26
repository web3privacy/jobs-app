import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { createClient } from '@supabase/supabase-js'
import { authOptions } from '@/utils/auth'
const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '')

export async function POST(request: Request) {
	const session = await getServerSession(authOptions)
	if (!session || session.user.role !== 'admin') {
		return NextResponse.json('Unauthorized', { status: 401 })
	}

	const { selectedVacancies } = await request.json()

	if (!selectedVacancies || !Array.isArray(selectedVacancies)) {
		return NextResponse.json('Invalid request body', { status: 400 })
	}

	try {
		const { data, error } = await supabase
			.from('Openings')
			.update({ archived_on: new Date().toISOString() })
			.in('id', selectedVacancies)
			.select()
		console.log('data', data)

		if (error) throw error

		return NextResponse.json(
			{ message: 'Vacancies archived successfully', archivedCount: data.length },
			{ status: 200 }
		)
	} catch (error) {
		console.log('error', error)
		return NextResponse.json('Failed to archive vacancies', { status: 500 })
	}
}
