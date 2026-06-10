'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Something went wrong</h1>

      <p className="max-w-md text-zinc-400">
        I&apos;m looking into it now. If refreshing the page doesn&apos;t work, contact{' '}
        <Link
          href="mailto:obiski15@gmail.com"
          className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
        >
          me
        </Link>{' '}
        for updates.
      </p>
      <button 
        onClick={() => router.refresh()} 
        className="rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        Reload page
      </button>
    </div>
  )
}
