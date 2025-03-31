import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { ArrowRight, Code, Database, Globe, Server, Zap } from "lucide-react"

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Product Support Analyst"

  // Typing animation effect
  useEffect(() => {
    setIsLoaded(true)

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="p-8 md:p-16 lg:p-24 relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[#2a2a2a] text-[180px] font-bold leading-none z-0 select-none">
        BUILD
        <br />
        WEBSITE
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full grid grid-cols-8 grid-rows-6 opacity-10">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="border border-gray-700"
              style={{
                animation: `pulse ${3 + Math.random() * 4}s infinite alternate ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-3 py-1 bg-[#2a2a2a] text-[#ff7b72] rounded-full text-sm mb-4 animate-bounce">
            Available for collaboration
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gradient">K.Saurabh Rao</h1>

          <div className="h-8 mb-4">
            <h2 className="text-xl md:text-2xl">
              {typedText}
              <span className="text-[#ff7b72] animate-pulse">|</span>
            </h2>
          </div>

          <p
            className="text-gray-300 mb-6 max-w-lg transition-all duration-1000 delay-300 
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
          >
            Currently working as a Product Support in Operative Media, helping client get thehang of the Digital Platform.
          </p>

          <div
            className="flex flex-wrap gap-4 mt-8 transition-all duration-1000 delay-500 
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
          >
            <Link
              to="/projects"
              className="px-6 py-2 bg-[#ff7b72] text-white rounded-md hover:bg-[#ff6b62] transition-colors group flex items-center"
            >
              View Work
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 border border-[#ff7b72] text-[#ff7b72] rounded-md hover:bg-[#ff7b72]/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>

          {/* Tech Stack */}
          <div
            className="mt-12 transition-all duration-1000 delay-700 
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
          >
            <h3 className="text-sm uppercase text-gray-400 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: (
                    <div className="text-blue-400">
                      <Code size={20} />
                    </div>
                  ),
                  name: "React",
                },
                {
                  icon: (
                    <div className="text-green-400">
                      <Server size={20} />
                    </div>
                  ),
                  name: "Node.js",
                },
                {
                  icon: (
                    <div className="text-purple-400">
                      <Database size={20} />
                    </div>
                  ),
                  name: "MongoDB",
                },
                {
                  icon: (
                    <div className="text-yellow-400">
                      <Globe size={20} />
                    </div>
                  ),
                  name: "Web3",
                },
                {
                  icon: (
                    <div className="text-red-400">
                      <Zap size={20} />
                    </div>
                  ),
                  name: "Solidity",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#2a2a2a] px-3 py-2 rounded-md hover:bg-[#3a3a3a] transition-colors"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInUp 0.5s ease-out forwards",
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                >
                  {tech.icon}
                  <span className="ml-2 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          {/* Profile Image */}
          <div className="relative z-10 mb-6">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 border-[#ff7b72] p-1">
              <img
                src="https://via.placeholder.com/400x400"
                alt="Harwin Dan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Code snippet overlay */}
            <div className="absolute -bottom-4 -right-4 bg-[#1e1e1e] p-3 rounded-md border border-gray-700 shadow-lg transform rotate-3 animate-float">
              <pre className="text-xs text-gray-300">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> ={" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-green-400">name</span>:{" "}
                  <span className="text-orange-400">'Saurabh Rao'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-green-400">skills</span>: [
                  <span className="text-orange-400">'JavaScript'</span>, <span className="text-orange-400">'React'</span>,{" "}
                  <span className="text-orange-400">'Node'</span>]
                  <br />
                  {"}"};
                </code>
              </pre>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-[#2a2a2a] p-4 rounded-lg transform hover:scale-105 transition-transform animate-float-slow">
              <h3 className="text-2xl font-bold text-[#e2e68d]">5</h3>
              <p className="text-sm text-gray-300">Years of Experience</p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg transform hover:scale-105 transition-transform animate-float-slower">
              <h3 className="text-2xl font-bold text-[#e2e68d]">50+</h3>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg transform hover:scale-105 transition-transform animate-float">
              <h3 className="text-2xl font-bold text-[#e2e68d]">5+</h3>
              <p className="text-sm text-gray-300">Custom Apps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-10 top-20 md:right-20 md:top-40 z-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#e2e68d] opacity-60 animate-float-slow"></div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#ff7b72] opacity-60 absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 animate-float-slower"></div>
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#ff7b72] opacity-60 absolute top-40 -left-10 md:top-60 md:-left-20 animate-float-slowest"></div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}
    </div>
  )
}

export default Home

