import { useState } from 'react'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

export const Home = () => {
    const titles = [
        "a software engineer",
        "a computer science student",
        "a fullstack developer",
        "a soccer fan",
        "a product manager intern",
        "a teaching assistant",
    ]

    const names =[
        "seif",
        "سيف"
    ]
    
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    
    const cycleTitle = () => {
        setCurrentTitleIndex((prevIndex) => 
            (prevIndex + 1) % titles.length
        )
    }

    const [currentNameIndex, setCurrentNameIndex] = useState(0)
    const cycleName = () => {
        setCurrentNameIndex((prevIndex) =>
        (prevIndex + 1) % names.length
        )
    }

    return (
        <section className="bg-[#fff]">
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 text-center mt-24 mb-24">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="mb-16">
                        <h1 className="text-[#111] text-5xl md:text-8xl font-bold mb-4 md:whitespace-nowrap md:-ml-10">
                            👋 hey, i'm{" "}
                            <span onClick={cycleName} className="text-[#8b5cf6] relative cursor-pointer">
                                {names[currentNameIndex]}
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#8b5cf6]"></span>
                            </span>
                        </h1>
                        <p className="text-[#444] text-xl md:text-2xl mt-4">
                            <span
                                onClick={cycleTitle}
                                className="text-[#111] relative cursor-pointer group"
                            >
                                {titles[currentTitleIndex]}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#111] group-hover:bg-[#8b5cf6] transition-colors"></span>
                            </span>
                        </p>
                    </div>
                    <p className="text-[#444] text-lg max-w-xl mx-auto leading-relaxed">
                        i'm a computer science student at mcmaster university and passionate developer based in toronto, focused on building beautiful and functional software.
                    </p>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/seifotefa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/seif-otefa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>

                    {/* Resume */}
                    <a
                        href="/assets/Seif_Otefa (1).pdf" // or external link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                        <FaFileAlt className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    )
}

