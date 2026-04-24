import { Button } from '../ui/button'

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
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className="bg-card border-border h-full space-y-4 rounded-xs border p-5"
          >
            <div className="space-y-1">
              <div className="text-primary flex items-center gap-2 text-[10px] uppercase">
                <p className="bg-primary size-1.5"></p>
                <p>[live]</p>
              </div>

              <h3 className="text-md text-primary leading-6 uppercase">
                project name
              </h3>
              <p className="text-muted-foreground wrap-break-word">
                project description
              </p>
            </div>

            <div></div>

            {/* stack */}
            <div className="flex flex-wrap gap-1.5 uppercase">
              <p className="border-border text-muted-foreground border p-2">
                nestjs
              </p>
              <p className="border-border text-muted-foreground border p-2">
                nestjs
              </p>
              <p className="border-border text-muted-foreground border p-2">
                nestjs
              </p>
            </div>

            <Button
              variant="accent"
              className="w-full rounded-none py-2 uppercase"
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
