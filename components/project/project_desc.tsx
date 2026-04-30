'use client'

import { IProject } from '@/types/project/project.types'
import { BookOpen, Eye, SquareArrowOutUpRight } from 'lucide-react'
import LineCount from '../common/line_count'
import Icon from '../icon'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function ProjectDesc({
  project_name,
  project,
}: {
  project_name: string
  project: IProject | undefined
}) {
  return (
    <>
      <div className="border-border text-secondary-foreground flex items-center gap-2 border px-4 py-2 leading-[16.5px]">
        <Icon Icon={BookOpen} />
        <span>
          README.md <span className="capitalize">{project_name}</span>
        </span>
      </div>

      <div className="flex">
        <div className="border-border border text-sm leading-6 max-md:hidden">
          <LineCount length={14} />
        </div>

        <div className="border-border space-y-4 border p-6 md:w-[90%]">
          <h3 className="text-2xl leading-8 font-bold capitalize">
            {project_name}
          </h3>

          <p className="text-muted-foreground text-sm leading-5.5">
            {project?.description}
          </p>

          <div>latency and throughput metrics </div>

          <div className="space-y-3">
            <h3 className="pb-1 text-sm leading-5 font-bold text-white uppercase">
              core_technologies
            </h3>

            <div className="flex flex-wrap gap-2 pb-3">
              {Object.values(project?.stack ?? {}).map(stack =>
                (Object.values(stack) as string[])
                  .flat(Infinity)
                  .map((v, i) => {
                    return (
                      <Badge key={i} variant="outline">
                        {v}
                      </Badge>
                    )
                  }),
              )}
            </div>
          </div>

          <div className="bg-card flex flex-col gap-4 p-4 sm:flex-row [&>button]:flex [&>button]:items-center [&>button]:gap-2 [&>button]:rounded-none [&>button]:px-6 [&>button]:py-3">
            <Button variant="accent">
              <Icon Icon={Eye} />
              <span>Github</span>
            </Button>

            <Button>
              <Icon Icon={SquareArrowOutUpRight} />
              <span>Live</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDesc
