"use client"

import { Link } from "react-router-dom"
import { FileText, FileCode, Mail, Code, Github } from "lucide-react"

interface TabBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabBar = ({ activeTab, setActiveTab }: TabBarProps) => {
  const tabs = [
    { path: "/", name: "home.jsx", icon: <FileCode size={14} />, color: "text-blue-400" },
    { path: "/about", name: "about.html", icon: <FileText size={14} />, color: "text-orange-400" },
    { path: "/contact", name: "contact.css", icon: <Mail size={14} />, color: "text-blue-400" },
    { path: "/projects", name: "projects.js", icon: <Code size={14} />, color: "text-yellow-400" },
    { path: "/github", name: "github.md", icon: <Github size={14} />, color: "text-gray-400" },
  ]

  return (
    <div className="bg-[#252526] p-2 border-b border-gray-800 flex overflow-x-auto hide-scrollbar">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`flex items-center px-3 py-1 text-sm mr-1 rounded-t ${
            activeTab === tab.path ? "bg-[#1e1e1e] text-white" : "text-gray-400 hover:bg-[#2d2d2d]"
          }`}
          onClick={() => setActiveTab(tab.path)}
        >
          <span className={`${tab.color} mr-2`}>{tab.icon}</span>
          <span>{tab.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default TabBar
