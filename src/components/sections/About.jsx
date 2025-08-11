import React from "react";
import profilePic from "../../assets/seifstatueliberty.jpg"; // Replace with your actual image path
const languages = [
    { name: "Python", logo: "/assets/python_logo.png" },
    { name: "HTML", logo: "/assets/html.svg" },
    { name: "CSS", logo: "/assets/css.svg" },
    { name: "C", logo: "/assets/c.svg" },
    { name: "SQL", logo: "/assets/mysql.svg" },
    { name: "JavaScript", logo: "/assets/javascript.svg" },
    { name: "TypeScript", logo: "/assets/typescript.png" },
    { name: "PHP", logo: "/assets/php.png" },
    { name: "Bash", logo: "/assets/bash.png" },
    { name: "Latex", logo: "/assets/latex.png" },
    { name: "Haskell", logo: "/assets/haskell.svg" },
];
const frameworks = [
    { name: "React", logo: "/assets/react.svg" },
    { name: "Node.js", logo: "/assets/nodejs.svg" },
    { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
];
const tools = [
    { name: "Apache", logo: "/assets/apache.svg" },
    { name: "Firebase", logo: "/assets/firebase.svg" },
    { name: "Git", logo: "/assets/git1.png" },
    { name: "Github", logo: "/assets/github.svg" },
    { name: "MySQL", logo: "/assets/mysql.svg" },
    { name: "UNIX", logo: "/assets/unix.jpg" },
];
  
export const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
              <section id="about" className="bg-[#fff] text-[#111] px-6 md:px-12 pt-32 pb-8 mt-0 mb-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            
                {/* Profile Image */}
                <div className="flex-shrink-0">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg border border-gray-600"
                />
                </div>

                {/* Bio Text */}
                <div className="w-full">

                <h2 className="text-5xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Who Am I?</h2>
                <p className="text-base sm:text-lg leading-relaxed">
                    i'm a second year computer science student at mcmaster university with a passion for using technology to drive change and innovation. some of my interests are web3, ai, and software design and development, and how technology intersects with education, finance, and fun.
                    <br /><br />
                    i'm driven by a constant need to improve, whether that's mentally, academically, or physically, i always strive to be the best i can be at what i do.
                    <br /><br />
                     i enjoy watching and playing soccer, and new experiences with good people.
                </p>
                </div>
            </div>
        </section>

        <section id="skills" className="bg-[#fff] text-[#111] pt-4 pb-20 px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-synonym font-light text-center mb-2" style={{ fontFamily: 'Synonym, monospace' }}>Skills</h2>
            <p className="mb-4 text-gray-400 text-base sm:text-lg">
            here are a few of the skills i've acquired throughout my journey.
            </p>
            <div className="text-left max-w-3xl mx-auto">
                <div className="mb-4">
                    <div className="font-semibold mb-1 text-[#1E40AF]">Languages</div>
                    <div className="flex flex-wrap gap-3">
                        {languages.map((skill, i) => (
                            <span key={i} className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <img src={skill.logo} alt={skill.name} title={skill.name} className="w-6 h-6 object-contain opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="font-semibold mb-1 text-[#1E40AF]">Frameworks</div>
                    <div className="flex flex-wrap gap-3">
                        {frameworks.map((skill, i) => (
                            <span key={i} className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <img src={skill.logo} alt={skill.name} title={skill.name} className="w-6 h-6 object-contain opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="font-semibold mb-1 text-[#1E40AF]">Developer Tools & Databases</div>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((skill, i) => (
                            <span key={i} className="bg-[#EBF3FF] border border-[#93C5FD] text-[#1E40AF] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <img src={skill.logo} alt={skill.name} title={skill.name} className="w-6 h-6 object-contain opacity-80" />
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </section>


    </>
  );
};
