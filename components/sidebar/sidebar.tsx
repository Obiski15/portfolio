'use client'

import {
  ChevronRight,
  CircleCheck,
  Code,
  FileText,
  Folders,
  GitGraph,
  Key,
  TicketPercent,
} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Icon from '../icon'
import { Badge } from '../ui/badge'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '../ui/sidebar'

function AppSidebar() {
  const router = useRouter()

  return (
    <Sidebar className="border-border static border-r lg:w-auto">
      <SidebarHeader>
        <button
          onClick={() => router.push('/')}
          className="lg:border-border flex cursor-pointer flex-row items-center gap-3 p-4 text-left md:p-1 lg:border lg:p-4"
        >
          <div className="border-primary size-8 rounded-xs border md:mx-auto lg:mx-0">
            <Image
              width={32}
              height={32}
              alt="profile"
              loading="lazy"
              src="/images/me.png"
              className="object-cover"
            />
          </div>

          <div className="uppercase md:hidden lg:block lg:flex-1">
            <h3 className="text-[11px] leading-[16.25px] text-[#cdbdff]">
              Obi_Emmanuel
            </h3>
            <p className="text-muted-foreground text-[10px] leading-[17.88px]">
              Fullstack_Developer
            </p>
          </div>
        </button>
      </SidebarHeader>

      <SidebarContent className="mt-4 px-4 md:px-0 lg:px-4">
        <SidebarGroup className="md:hidden lg:block">
          <SidebarGroupLabel>EXPLORER</SidebarGroupLabel>

          <SidebarMenu>
            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="text-accent">
                    <Icon Icon={Folders} />
                    <span className="uppercase">core_system</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        onClick={() => router.push('/intro')}
                        className="text-muted-foreground cursor-pointer"
                      >
                        <Icon
                          color="var(--color-muted-foreground)"
                          Icon={FileText}
                        />
                        <span>Intro.md</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        onClick={() => router.push('/stack')}
                        className="text-muted-foreground cursor-pointer"
                      >
                        <Icon
                          Icon={Code}
                          color="var(--color-muted-foreground)"
                        />
                        <span>Stack.yaml</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        onClick={() => router.push('/projects')}
                        className="text-muted-foreground cursor-pointer"
                      >
                        <Icon
                          Icon={GitGraph}
                          color="var(--color-muted-foreground)"
                        />
                        <span>Architecture.git</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="md:p-1 lg:p-2">
          <SidebarMenu>
            <SidebarMenuItem className="hidden md:block lg:hidden">
              <SidebarMenuButton
                onClick={() => router.push('/intro')}
                className="text-muted-foreground cursor-pointer md:p-1 lg:p-2"
              >
                <Icon
                  color="var(--color-muted-foreground)"
                  Icon={FileText}
                  className="md:mx-auto lg:mx-0"
                />
                <span className="md:hidden lg:inline">Intro.md</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem className="hidden md:block lg:hidden">
              <SidebarMenuButton
                onClick={() => router.push('/stack')}
                className="text-muted-foreground cursor-pointer md:p-1 lg:p-2"
              >
                <Icon
                  Icon={Code}
                  color="var(--color-muted-foreground)"
                  className="md:mx-auto lg:mx-0"
                />
                <span className="md:hidden lg:inline">Stack.yaml</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem className="hidden md:block lg:hidden">
              <SidebarMenuButton
                onClick={() => router.push('/projects')}
                className="text-muted-foreground cursor-pointer md:p-1 lg:p-2"
              >
                <Icon
                  Icon={GitGraph}
                  color="var(--color-muted-foreground)"
                  className="md:mx-auto lg:mx-0"
                />
                <span className="md:hidden lg:inline">Architecture.git</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => router.push('/contact')}
                className="text-primary cursor-pointer md:p-1 lg:p-2"
              >
                <Icon Icon={TicketPercent} className="md:mx-auto lg:mx-0" />
                <span className="uppercase md:hidden lg:inline">
                  open_ticket()
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-border space-y-2 border-t md:px-0 lg:px-2">
        <div className="flex items-center gap-2 uppercase md:mx-auto lg:mx-0">
          <Icon Icon={Key} />

          <div className="flex flex-1 items-center justify-between md:hidden lg:block">
            <span>ssh_key</span>

            <Badge
              variant="outline"
              className="bg-input text-muted-foreground ml-2"
            >
              rsa-4096
            </Badge>
          </div>
        </div>

        <div className="text-primary flex items-center gap-2 uppercase md:mx-auto lg:mx-0">
          <Icon Icon={CircleCheck} />

          <span className="md:hidden lg:inline">status: normal</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
