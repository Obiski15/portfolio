'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function ErrorPage() {
  const router = useRouter()

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-2xl font-bold">Something went wrong...</h1>

      <p>
        I'm looking into it now. If refreshing the page doesn't work, contact{' '}
        <Link
          href="mailto:obiski15@gmail.com"
          className="text-accent underline"
        >
          me
        </Link>{' '}
        for updates.
      </p>
      <Button onClick={() => router.refresh()} className="px-6 py-3">
        Reload page
      </Button>
    </div>
  )
}

export default ErrorPage
