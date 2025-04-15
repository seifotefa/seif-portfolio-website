import React from "react";
import profilePic from "../../assets/seifstatueliberty.jpg"; // Replace with your actual image path
const skills = [
    { name: "HTML", logo: "/assets/html.svg" },
    { name: "CSS", logo: "/assets/css.svg" },
    { name: "JavaScript", logo: "/assets/javascript.svg" },
    { name: "Python", logo: "/assets/python_logo.png" },
    { name: "React", logo: "/assets/react.svg" },
    { name: "Bash", logo: "/assets/bash.png" },
    { name: "Node.js", logo: "/assets/nodejs.svg" },
    { name: "Git", logo: "/assets/git1.png" },
    { name: "C", logo: "/assets/c.svg" },
    { name: "Linux", logo: "/assets/linux.png" },
    { name: "SQL", logo: "/assets/mysql.svg" },
    { name: "PHP", logo: "/assets/php.png" },
  ];
  
export const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#111111] text-gray-300 px-6 md:px-12 pt-40 pb-45">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            
                {/* Profile Image */}
                <div className="flex-shrink-0">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg border border-gray-600 shadow-lg"
                />
                </div>

                {/* Bio Text */}
                <div className="w-full">

                <h2 className="text-3xl font-bold mb-4">who am i?</h2>
                <p className="text-lg leading-relaxed">
                    i’m seif otefa, a first year computer science student at mcmaster university with a passion for using technology to drive change and innovation. 
                    <br /><br />
                    i'm driven by a constant need to improve, whether that's mentally, academically, or physically, i always strive to be the best i can be at what i do.
                    <br /><br />
                    outside of working and studying, i enjoy watching and playing soccer, trying out new foods and exploring new places, hanging out with my friends, and (as of recently) playing the guitar.
                </p>
                </div>
            </div>
        </section>

        <section id="skills" className="bg-[#111111] text-gray-300 pt-0 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-2">skills</h2>
            <p className="mb-4 text-gray-400 text-lg">
            here are a few of the skills i've acquired throughout my journey.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, i) => (
                    <div
                    key={i}
                    className="w-full aspect-square border border-gray-700 bg-[#181A1F] rounded-md flex items-center justify-center hover:scale-105 transition"
                    >
                    <img
                        src={skill.logo}
                        alt={skill.name}
                        title={skill.name}
                        className="w-28 h-28 object-contain opacity-80"
                    />
                    </div>
                ))}
            </div>
        </div>
        </section>


    </>
  );
};
