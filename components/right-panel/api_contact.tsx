import { Mail } from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import Icon from '../icon'
import { Button } from '../ui/button'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
})

const code_block = [
  { subject: 'Request Proposal' },
  { priority: 'HIGH' },
  { endpoint: 'POST/v1/ticket' },
]

function ApiContact() {
  return (
    <div className="bg-card border-border space-y-4 rounded-2xl border p-5">
      <div className="gap- flex items-center uppercase">
        <div></div>
        <h2 className={`${jetBrainsMono.variable} text-sm text-white`}>
          api_contact
        </h2>
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
      >
        <Icon Icon={Mail} />
        <span>Open a ticket</span>
      </Button>
    </div>
  )
}

export default ApiContact
