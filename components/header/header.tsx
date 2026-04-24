import { Menu, Radio, Settings, TerminalSquare } from 'lucide-react'
import Icon from '../icon'
import { SidebarTrigger } from '../ui/sidebar'

function Header() {
  return (
    <header className="border-border border-b px-4 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <h3 className="text-accent text-sm font-bold uppercase max-md:hidden">
            software_eng v2.4.0
          </h3>

          <SidebarTrigger className="md:hidden">
            <Icon Icon={Menu} />
          </SidebarTrigger>

          <div className="inline-flex items-center gap-2">
            <span className="text-primary uppercase">[root@obi:~]$</span>
            <span className="max-md:hidden">systeminfo --user obi-dev</span>
          </div>
        </div>

        <div className="flex items-center gap-6 uppercase">
          <div className="[&>p]:text-muted-foreground sm:[&>p]:border-border inline-flex items-center [&>p]:inline [&>p]:px-4 sm:[&>p]:border-r">
            <p className="max-sm:hidden!">
              uptime: <span className="text-primary">99.9%</span>
            </p>
            <p>
              <span className="max-sm:hidden">location: </span>lagos
              <span className="sm:hidden">(NG)</span>
            </p>
          </div>

          <div className="flex items-center gap-3 max-lg:hidden">
            <Icon Icon={TerminalSquare} />
            <Icon Icon={Radio} />
            <Icon Icon={Settings} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
