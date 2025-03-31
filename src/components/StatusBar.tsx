import { GitBranch, Code, Mail } from "lucide-react"

const StatusBar = () => {
  return (
    <div className="bg-[#007acc] text-white text-xs p-1 flex justify-between">
      <div className="flex items-center">
        <span className="mr-4 flex items-center">
          <GitBranch size={14} className="mr-1" /> main
        </span>
        <span className="mr-4 flex items-center">
          <Code size={14} className="mr-1" /> 0
        </span>
        <span className="flex items-center">
          <Mail size={14} className="mr-1" /> 0
        </span>
      </div>
      <div>
        <span className="mr-4">Powered by Vite</span>
        <span>Prettier</span>
      </div>
    </div>
  )
}

export default StatusBar

