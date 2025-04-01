const About = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = '/path/to/your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Saurabh-Rao-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 md:p-16 lg:p-24 relative min-h-[calc(100vh-72px)]">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[#2a2a2a] text-[180px] font-bold leading-none z-0 select-none">
        ABOUT
        <br />
        ME
      </div>

      {/* Main Content Container - Side by Side Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* About Me Content - Left Side */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff7b72]">
            About Me
          </h1>

          <div className="space-y-6 text-lg">
            <p>
              Hello! I'm{" "}
              <span className="text-[#ff7b72] font-semibold">K.Saurabh Rao</span>,
              Results-driven Product Support Specialist with over 5 years of
              experience in technical support and customer service within the
              media industry. Skilled in troubleshooting software and hardware
              issues, conducting root cause analysis, and delivering effective
              solutions. Proficient in collaborating with cross-functional teams
              to optimize operations and ensure customer satisfaction.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-3">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-[#2a2a2a] p-3 rounded">
                  <h3 className="font-medium text-[#e2e68d]">Frontend</h3>
                  <ul className="list-disc list-inside text-base mt-2">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                <div className="bg-[#2a2a2a] p-3 rounded">
                  <h3 className="font-medium text-[#e2e68d]">Backend</h3>
                  <ul className="list-disc list-inside text-base mt-2">
                    <li>Node.js / Express</li>
                    <li>MongoDB / PostgreSQL</li>
                    <li>GraphQL</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Experience</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-[#ff7b72] pl-4">
                  <h3 className="font-medium">Product Support Analyst</h3>
                  <p className="text-[#e2e68d] text-sm">
                    Operative Media | 2019 - Present
                  </p>
                  <p className="text-base mt-1">
                    Helping client get the hang of our Digital and Linear platform
                    AOS/OperativeOne.
                  </p>
                </div>

                <div className="border-l-2 border-[#ff7b72] pl-4">
                  <h3 className="font-medium">Tech Support</h3>
                  <p className="text-[#e2e68d] text-sm">Infosys BPM</p>
                  <p className="text-base mt-1">Helping BT-Openreach customer.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Education</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-[#ff7b72] pl-4">
                  <h3 className="font-medium">
                    MBA
                  </h3>
                  <p className="text-[#e2e68d] text-sm">
                    International School of Management Excellence | 2017-2019
                  </p>
                </div>
                <div className="border-l-2 border-[#ff7b72] pl-4">
                  <h3 className="font-medium">
                    B.E in Electronics and Communications
                  </h3>
                  <p className="text-[#e2e68d] text-sm">
                    St.Aloysious Institute of Technology 2011-2015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CV Download Section - Right Side */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg border border-[#3a3a3a] sticky top-24">
            <div className="flex flex-col items-center">
              {/* CV Preview */}
              <div className="w-full h-96 bg-[#3a3a3a] mb-4 rounded flex items-center justify-center overflow-hidden">
                {/* <span className="text-gray-400">CV Preview</span> */}
                <img src="/CV-preview.jpg" alt="CV Preview" className="w-full h-full object-contain" />
                {/* Replace with actual preview: <img src="/cv-preview.jpg" alt="CV Preview" className="w-full h-full object-contain" /> */}
              </div>
              
              <button 
                onClick={handleDownloadCV}
                className="w-full bg-[#ff7b72] hover:bg-[#ff6b62] text-white font-semibold py-3 px-4 rounded transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </button>
              
              <p className="text-sm text-gray-400 mt-3 text-center">
                PDF Format ({(1024 / 1024).toFixed(1)} MB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;