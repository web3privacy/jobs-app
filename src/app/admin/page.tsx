import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/auth'
import { createClient } from '@supabase/supabase-js'
import VacancyList from '@/components/VacancyList'
import { redirect } from 'next/navigation'

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '')

export const metadata = {
	title: 'Admin | Archive Jobs',
}

export default async function AdminPage() {
	const session = await getServerSession(authOptions)
	if (!session || session.user.role !== 'admin') {
		redirect('/')
	}

	const { data: vacancies, error } = await supabase
		.from('Openings')
		.select()
		.is('archived_on', null)
		.order('created_at', { ascending: false })

	if (error) {
		console.error('Error fetching vacancies:', error)
		return <div>Error loading vacancies</div>
	}

	return (
		<main className="">
			<VacancyList vacancies={vacancies} />
		</main>
	)
}
