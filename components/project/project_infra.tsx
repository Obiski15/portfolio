import { cn } from '@/lib/utils'
import { Scan } from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import Icon from '../icon'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

function ProjectInfra() {
  return (
    <div>
      <div className="border-border flex items-center justify-between border px-4 py-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2">
            {Array.from({ length: 3 }, (_, i) => (
              <span
                key={i}
                className={cn('size-3 rounded-full', {
                  'border border-[#EF444480] bg-[#EF444433]': i === 0,
                  'border border-[#EAB30880] bg-[#EAB30833]': i === 1,
                  'border border-[#22C55E80] bg-[#22C55E33]': i === 2,
                })}
              ></span>
            ))}
          </p>

          <p>architecture_diagram.svg</p>
        </div>

        <Icon Icon={Scan} className="max-sm:hidden" />
      </div>

      <div className="border-border border p-4">
        <div className="space-y-10">
          <h3
            className={`${jetBrainsMono.className} text-lg leading-7 text-[#CDBDFF]`}
          >
            Infrastructure Overview
          </h3>
          <p></p>
        </div>

        <div className="border-2">Diagram</div>
      </div>
    </div>
  )
}

export default ProjectInfra
