import { coreCompetencies } from '@/constants'
import { cn } from '@/lib/utils'

const logs = {
  sys: [
    'Initializing core kernel modules...',
    'Establishing secure link...',
    'Mounting file systems...',
  ],
  profile: ['Fullstack Developer', 'Open Source Contributor', 'Lagos, Nigeria'],
}

function Intro() {
  return (
    <>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            {Array.from({ length: 3 }, (_, i) => (
              <span
                key={i}
                className={cn(`h-3 w-3 rounded-full`, {
                  'bg-destructive': i === 0,
                  'bg-warning': i === 1,
                  'bg-primary': i === 2,
                })}
              ></span>
            ))}
          </div>

          <span className="text-muted-foreground pl-2">
            /var/log/system_init.sh
          </span>
        </div>

        <div className="text-md space-y-2 leading-6">
          {logs['sys'].map(log => (
            <p key={log}>
              <span className="text-primary">[OK] </span>
              <span className="text-muted-foreground">{log}</span>
            </p>
          ))}
        </div>

        <div className="space-y-2 text-lg font-bold text-[#F0F6FC]">
          {logs['profile'].map(info => (
            <p key={info}>
              <span className="text-accent">{`> `}</span>
              <span>{info}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-6 p-6 md:p-10">
        <h3 className="Leading-6 text-md">Developer Philosophy</h3>

        <p className="text-md text-muted-foreground leading-6.5">
          I don't just write code; I build robust, scalable architectures. While
          I build clean, functional front-ends, I specialize in transforming
          complex ideas into high-performance backend architectures that ensure
          everything works flawlessly under the hood.
        </p>

        <div className="space-y-4">
          <h3 className="text-accent text-sm uppercase">core competencies</h3>

          <ul className="space-y-3">
            {coreCompetencies.map(competency => (
              <li key={competency} className="flex items-center gap-3">
                <span className="bg-primary size-1.5 rounded-full"></span>

                <span className="text-sm leading-5">{competency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Intro
