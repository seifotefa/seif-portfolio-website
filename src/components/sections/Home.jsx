import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    const titles = [
        "software engineer",
        "computer science student", 
        "fullstack developer",
        "project manager",
        "teaching assistant",
        "problem solver"
    ]
    
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const currentTitle = titles[currentTitleIndex]
    
    // Auto-cycle titles every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => 
                (prevIndex + 1) % titles.length
            )
        }, 2000)
        
        return () => clearInterval(interval)
    }, [titles.length])

    return (
        <section className="h-screen w-screen flex items-center justify-center overflow-hidden">
            <div className="relative w-[98vw] h-screen max-w-none">
                {/* Signature: large, centered */}
                <img 
                    src="/assets/signature.svg" 
                    alt="Seif's Signature"
                    className="absolute top-1/2 left-1/2 w-[98vw] h-[92vh] md:h-[94vh] lg:h-[96vh] object-contain select-none opacity-20 mix-blend-multiply"
                    draggable={false}
                    style={{
                        transform: 'translate(calc(-50% + 20px), calc(-50% - 40px)) scale(1.15)',
                        filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.05))'
                    }}
                />

                {/* Headline + tagline */}
                <div className="absolute z-10 top-1/2 -translate-y-1/2 pr-6 left-[calc(10%-20px)]">
                    <div className="flex items-center gap-4">
                        <span className="leading-tight font-light text-[36px] md:text-[44px] lg:text-[52px]" style={{ color: '#333333' }}>
                            {' '}
                            <span
                                className="text-transparent font-medium underline decoration-[#4A90E2]/60 underline-offset-4 text-[38px] md:text-[48px] lg:text-[56px]"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #4A90E2, #4A90E2)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text'
                                }}
                            >
                                {currentTitle}
                            </span>{' '}
                            based in toronto
                        </span>
                        <span className="hidden sm:block flex-1 h-[2px] bg-gray-300 rounded"></span>
                    </div>
                    <p className="mt-2 text-[20px] md:text-[22px] lg:text-[24px]" style={{ color: '#666666' }}>
                        crafting beautiful, functional, and impactful experiences through software
                    </p>
                    
                    {/* Mobile Navigation Links */}
                    <div className="mobile:hidden mt-6 flex flex-wrap gap-4">
                        <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors text-lg" to="/about">about</Link>
                        <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors text-lg" to="/experience">resume/cv</Link>
                        <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors text-lg" to="/projects">projects</Link>
                        <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors text-lg" to="/blog">blog</Link>
                        <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors text-lg" to="/contact">contact</Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className={`
                        hidden mobile:block absolute z-10 transition-all
                        text-lg md:text-xl lg:text-2xl
                        flex gap-5
                        flex-col items-end
                        top-1/2 -translate-y-1/2 right-[calc(10%+40px)]
                    `}
                >
                    <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors" to="/about">about</Link>
                    <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors" to="/experience">resume/cv</Link>
                    <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors" to="/projects">projects</Link>
                    <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors" to="/blog">blog</Link>
                    <Link className="text-gray-500 hover:text-[#4A90E2] transition-colors" to="/contact">contact</Link>
                </nav>
            </div>
        </section>
    )
}
