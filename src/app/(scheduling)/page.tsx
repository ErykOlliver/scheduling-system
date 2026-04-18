import Scheduling from '@/src/modules/scheduling/page'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Manager from '@/src/modules/scheduling/components/manager'

export default async function page() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/authenticator")

  const isAdmin = session.user.admin_level === "ADMIN"


  return (
    <section className='w-screen relative h-screen bg-zinc-950'>
      {isAdmin && (
        <Manager />
      )}
      <Scheduling />
    </section>
  )
}
