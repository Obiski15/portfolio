import { projects } from '@/constants'
import ProjectItem from './project_item'

function Projects() {
  return (
    <div className="space-y-10 p-4">
      <div className="flex items-center justify-between uppercase">
        <h3 className="text-primary text-md">[list_projects]</h3>

        <div className="flex items-center gap-2">
          <p className="bg-primary size-2 rounded-full"></p>

          <p className="text-[10px] text-[#64748B] max-sm:hidden">
            system operational
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
