import ProjectDesc from './project_desc'
import ProjectInfra from './project_infra'

function Project() {
  return (
    <div className="space-y-6 p-6">
      <ProjectInfra />

      <ProjectDesc />
    </div>
  )
}

export default Project
