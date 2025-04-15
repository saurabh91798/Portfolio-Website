import { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import TabBar from "./components/TabBar"
import StatusBar from "./components/StatusBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


function App() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location.pathname)

  // Update active tab when location changes
  useState(() => {
    setActiveTab(location.pathname)
  })

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
        {/* Tab Bar */}
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        {/* Status Bar */}
        <StatusBar />
      </div>
    </div>
  )
}

export default App

