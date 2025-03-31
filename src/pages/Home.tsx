import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 relative min-h-[calc(100vh-72px)]">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[#2a2a2a] text-[180px] font-bold leading-none z-0 select-none">
        BUILD
        <br />
        WEBSITES
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">K.Saurabh Rao</h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Product Support Analyst<span className="text-[#ff7b72] animate-pulse">|</span>
        </h2>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            to="/projects"
            className="px-6 py-2 bg-[#ff7b72] text-white rounded hover:bg-[#ff6b62] transition-colors"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 border border-[#ff7b72] text-[#ff7b72] rounded hover:bg-[#ff7b72]/10 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-10 top-20 md:right-20 md:top-40 z-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#e2e68d] opacity-80"></div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#ff7b72] opacity-80 absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20"></div>
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#ff7b72] opacity-80 absolute top-40 -left-10 md:top-60 md:-left-20"></div>
      </div>
    </div>
  )
}

export default Home

