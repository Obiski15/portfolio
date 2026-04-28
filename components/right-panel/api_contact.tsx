'use client'

import { Mail } from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import { useRouter } from 'next/navigation'
import Icon from '../icon'
import { Button } from '../ui/button'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
})

const code_block = [
  { priority: 'high' },
  { request_type: 'partnership' },
  { message: 'I’m interested in discussing a potential collaboration.' },
]

function ApiContact() {
  const router = useRouter()

  return (
    <div className="bg-card border-border space-y-4 rounded-2xl border p-5">
      <div className="gap- flex items-center uppercase">
        <h2 className={`${jetBrainsMono.variable} text-sm`}>api_contact</h2>
      </div>

      <div className="p-3">
        <p>{`{`}</p>
        {code_block.map((item, index) => (
          <div key={index} className="">
            {Object.entries(item).map(([key, value]) => (
              <p key={key} className="pl-4 wrap-break-word">
                <span className="text-muted-foreground">{`"${key}"`}: </span>{' '}
                <span className="text-primary">{`"${value}"`}</span>
              </p>
            ))}
          </div>
        ))}
        <p>{`}`}</p>
      </div>

      <Button
        className="text-md flex w-full items-center justify-center space-x-2 rounded-none py-6 font-bold"
        variant="accent"
        onClick={() =>
          router.push(
            `/contact${code_block
              .map((block, i) =>
                Object.entries(block).map(([key, value]) => {
                  console.log()
                  if (i === 0) return `?${key}=${value}`
                  return `&${key}=${value}`
                }),
              )
              .join('')}`,
          )
        }
      >
        <Icon Icon={Mail} />
        <span>Open a ticket</span>
      </Button>
    </div>
  )
}

export default ApiContact
