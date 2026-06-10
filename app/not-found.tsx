import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 text-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">404</h1>
      <p className="max-w-md text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        Return Home
      </Link>
    </div>
  )
}
