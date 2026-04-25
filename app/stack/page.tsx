import Icon from '@/components/icon'
import { stack } from '@/constants'
import { SquareTerminal, X } from 'lucide-react'

function StackPage() {
  const computeLineNum = () =>
    Object.entries(stack).length * 2 -
    1 +
    Object.values(stack)
      .map(value => Object.values(value).map(v => v))
      .flatMap(i => i).length

  return (
    <div className="space-y-4 pb-4">
      <div className="bg-card border-border border-b sm:px-4">
        <div className="bg-background border-border flex w-fit items-center gap-2 border-x border-b px-4 py-3">
          <Icon Icon={SquareTerminal} className="text-primary" />
          <p>config/cluster_stack.yaml</p>
          <Icon Icon={X} className="text-muted-foreground" />
        </div>
      </div>

      <div className="flex text-sm leading-6">
        <div className="text-muted-foreground">
          {Array.from(
            {
              length: computeLineNum(),
            },
            (_, i) => (
              <p key={i} className="pr-6 pl-4">
                {i}
              </p>
            ),
          )}
        </div>

        <div className="flex-1 space-y-6 overflow-x-auto whitespace-nowrap">
          {Object.entries(stack).map(([key, value]) => (
            <div key={key}>
              <p className="capitalize">
                <span className="text-primary">{`${key}`}</span>:
              </p>
              {Object.entries(value).map(([subKey, subValue]) => (
                <p key={subKey} className="pl-4">
                  <span className="text-primary">{`- ${subKey}: `}</span>
                  {Array.isArray(subValue) && (
                    <span className="text-accent">
                      {subValue.map(i => i).join(', ')}
                    </span>
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackPage
