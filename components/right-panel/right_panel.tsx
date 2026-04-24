import ApiContact from './api_contact'
import SYSLogs from './sys_logs'

function RightPanel() {
  return (
    <div className="space-y-6 p-4">
      <SYSLogs />
      <ApiContact />
    </div>
  )
}

export default RightPanel
