import { Link } from "react-router-dom"
import { FileText, FileCode, Mail, Code, Github } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-800 p-4 hidden md:block">
      <div className="mb-6">
        <h2 className="text-sm text-gray-400 mb-2">EXPLORER</h2>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-gray-400 mr-2">▼</span>
          <span>PORTFOLIO</span>
        </div>
        <div className="ml-4 space-y-2">
          <Link to="/" className="flex items-center text-sm hover:bg-[#2a2d2e] p-1 rounded">
            <span className="text-blue-400 mr-2">
              <FileCode size={16} />
            </span>
            <span>home.jsx</span>
          </Link>
          <Link to="/about" className="flex items-center text-sm hover:bg-[#2a2d2e] p-1 rounded">
            <span className="text-orange-400 mr-2">
              <FileText size={16} />
            </span>
            <span>about.html</span>
          </Link>
          <Link to="/contact" className="flex items-center text-sm hover:bg-[#2a2d2e] p-1 rounded">
            <span className="text-blue-400 mr-2">
              <Mail size={16} />
            </span>
            <span>contact.css</span>
          </Link>
          <Link to="/projects" className="flex items-center text-sm hover:bg-[#2a2d2e] p-1 rounded">
            <span className="text-yellow-400 mr-2">
              <Code size={16} />
            </span>
            <span>projects.js</span>
          </Link>
          <Link to="/github" className="flex items-center text-sm hover:bg-[#2a2d2e] p-1 rounded">
            <span className="text-gray-400 mr-2">
              <Github size={16} />
            </span>
            <span>github.md</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

