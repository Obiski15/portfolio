import Loading from '@/components/common/loading'
import Contact from '@/components/contact/contact'
import { Suspense } from 'react'

function ContactPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Contact />
    </Suspense>
  )
}

export default ContactPage
