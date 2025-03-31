const About = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 relative min-h-[calc(100vh-72px)]">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-[#2a2a2a] text-[180px] font-bold leading-none z-0 select-none">
        ABOUT
        <br />
        ME
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff7b72]">
          About Me
        </h1>

        <div className="space-y-6 text-lg">
          <p>
            Hello! I'm{" "}
            <span className="text-[#ff7b72] font-semibold">K.Saurbah Rao</span>,
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
    </div>
  );
};

export default About;
