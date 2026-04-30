'use client'

import { projects } from '@/constants'
import { usePathname } from 'next/navigation'
import NotFound from '../common/not_found'
import ProjectDesc from './project_desc'
import ProjectInfra from './project_infra'

function Project() {
  const pathname = usePathname()
  const project_name = decodeURIComponent(pathname)
    .split('/')
    .at(-1)
    ?.toLowerCase() as string

  const project = projects.find(p => p.name.toLowerCase() === project_name)

  return project ? (
    <div className="space-y-6 p-6">
      <ProjectInfra />

      <ProjectDesc project_name={project_name} project={project} />
    </div>
  ) : (
    <NotFound />
  )
}

export default Project
