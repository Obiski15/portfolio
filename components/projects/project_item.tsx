'use client'

import { cn } from '@/lib/utils'
import { IProject, ProjectStatus } from '@/types/project/project.types'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

function ProjectItem({ project }: { project: IProject }) {
  const router = useRouter()

  return (
    <div className="bg-card border-border flex h-full flex-col justify-between space-y-4 rounded-xs border p-5">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              'flex items-center gap-2 text-[10px] uppercase',
              project.status === ProjectStatus.LIVE
                ? 'text-primary'
                : project.status === ProjectStatus.IN_PROGRESS
                  ? 'text-warning'
                  : 'text-muted-foreground',
            )}
          >
            <p
              className={cn(
                'size-1.5 rounded-full',
                project.status === ProjectStatus.LIVE
                  ? 'bg-primary'
                  : project.status === ProjectStatus.IN_PROGRESS
                    ? 'bg-warning'
                    : 'bg-muted-foreground',
              )}
            ></p>
            <p>[{project.status}]</p>
          </div>

          <p className="text-accent text-[10px] uppercase">{project.type}</p>
        </div>

        <h3 className="text-md text-primary leading-6 uppercase">
          {project.abbreviation || project.name}
        </h3>
        <p className="text-muted-foreground wrap-break-word">
          {project.description}
        </p>
      </div>

      {/* stack */}
      <div className="flex flex-1 flex-wrap gap-1.5 uppercase">
        {Array.from(
          new Set(
            Object.values(project.stack)
              .map(category => Object.values(category as object))
              .flat(Infinity) as string[],
          ),
        ).map((tech, j) => (
          <p
            key={tech || j}
            className="border-border text-muted-foreground border p-2"
          >
            {tech}
          </p>
        ))}
      </div>

      <Button
        variant="accent"
        className="w-full rounded-none py-2 uppercase"
        onClick={() => router.push(`/projects/${project.name.toLowerCase()}`)}
      >
        View
      </Button>
    </div>
  )
}

export default ProjectItem
