import { cn } from '@/lib/utils'

const logs = [
  {
    tag: 'INFO',
    message: 'System started successfully',
    timestamp: '2026-04-01 10:00:00',
  },
  {
    tag: 'INFO',
    message: 'Installing dependencies...',
    timestamp: '2026-04-01 10:05:00',
  },
  {
    tag: 'WARN',
    message: '0 errors, 2 warnings found',
    timestamp: '2026-04-01 10:15:00',
  },
  {
    tag: 'INFO',
    message: 'Compiling...',
    timestamp: '2026-04-01 10:10:00',
  },
  {
    tag: 'OK',
    message: 'Test suites passed (5/5)',
    timestamp: '2026-04-01 10:20:00',
  },
  {
    tag: 'OK',
    message: 'Application live at production URL',
    timestamp: '2026-04-01 10:25:00',
  },
]

function SYSLogs() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[10px] uppercase">
        <h3>System_logs</h3>

        <div className="flex items-center justify-between gap-1">
          <span className="bg-primary size-1.5 rounded-full"></span>{' '}
          <span>live</span>
        </div>
      </div>

      <div className="bg-sidebar-primary-foreground border-border space-y-2 rounded-xs border p-3 text-[10px]">
        {logs.map(({ tag, message, timestamp }, index) => (
          <div key={index} className="relative flex items-start gap-2">
            {index === logs.length - 1 && (
              <span className="top absolute bottom-px left-px h-16 w-full bg-linear-to-b from-[#010409] to-transparent"></span>
            )}
            <span
              className={cn('w-[20%] shrink-0 px-2 py-1', {
                'text-warning': tag === 'WARN',
                'text-accent': tag === 'INFO',
                'text-primary': tag === 'OK',
              })}
            >
              [{tag}]
            </span>

            <div className="flex min-w-0 flex-1 gap-2 px-1">
              <span className="text-muted-foreground w-[30%] text-[10px]">
                {timestamp}
              </span>

              <p className="text-secondary-foreground w-[70%] wrap-break-word">
                {message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SYSLogs
