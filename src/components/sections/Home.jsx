import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ASCIIText from '../ASCIIText'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const Arrow = ({ direction = 'right' }) => (
    <span 
        className="ml-3 inline-block w-0 h-0 border-solid transition-transform duration-300 ease-in-out"
        style={{
            borderWidth: '4px 0 4px 6px',
            borderColor: 'transparent transparent transparent #111111',
            transform: direction === 'down' ? 'rotate(90deg)' : 'rotate(0deg)'
        }}
    ></span>
);

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
    const { width } = useWindowSize()
    const isMobile = width < 768
    
    const [isCurrentExpanded, setIsCurrentExpanded] = useState(true)
    const [isPreviousExpanded, setIsPreviousExpanded] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => 
                (prevIndex + 1) % titles.length
            )
        }, 2000)
        
        return () => clearInterval(interval)
    }, [titles.length])
    
    const toggleExpansion = (section) => {
        if (section === 'current') {
            setIsCurrentExpanded(!isCurrentExpanded)
        } else {
            setIsPreviousExpanded(!isPreviousExpanded)
        }
    }
    
    // 💡 ADJUSTED: Scaling logic reduced by ~10%. Max cap is now 108px (90% of 120px).
    // The width * 0.075 scaling factor is a slight reduction to maintain proportion.
    const responsiveTextSize = Math.min(Math.max(width * 0.075, 36), 108); // Max 108px, Min 36px

    // 💡 ADJUSTED: ASCII grid size scales proportionally to the new text size.
    const responsiveAsciiSize = Math.min(Math.max(responsiveTextSize / 20, 1.35), 5.4); // Max 5.4 (90% of 6), Min 1.35
    
    return (
        <section className="w-screen flex flex-col">
            
            <div 
                className="relative w-full flex items-center justify-center h-screen" 
                // minHeight adjusted to account for slightly smaller animation footprint
                style={{ minHeight: isMobile ? '200px' : '360px' }} 
            >
                <div className="w-full h-full flex items-center justify-center">
                    <ASCIIText
                        text="Seif Otefa"
                        enableWaves={true}
                        
                        // New proportional scaling for the entire grid/box
                        asciiFontSize={responsiveAsciiSize} 
                        
                        // New proportional scaling for the text size
                        textFontSize={responsiveTextSize} 
                        
                        textColor="#1a1a1a"
                        
                        // Plane height matches new ascii size
                        planeBaseHeight={responsiveAsciiSize} 
                        // --------------------------------------------------------------------
                    />
                </div>
            </div>

            <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-20 text-left">
                
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col max-w-4xl"> 
                        <span className="leading-tight font-light text-[32px] sm:text-[42px] md:text-[52px] lg:text-[40px] text-left" style={{ color: '#111111' }}>
                            {' '}
                            <span className="font-medium" style={{ color: '#111111' }}>
                                {currentTitle}
                            </span>{' '}
                            based in toronto
                        </span>
                    </div>
                    
                    <p className="mt-4 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-left max-w-4xl" style={{ color: '#666666' }}>
                        crafting beautiful, functional, and impactful experiences through software
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-24 pt-10 border-t border-gray-200">
                    <h2 className="text-[22px] sm:text-[28px] font-medium mb-10" style={{ color: '#111111' }}>
                        things i've worked on / i'm working on
                    </h2>
                    
                    <div className="mb-12">
                        <button 
                            onClick={() => toggleExpansion('current')}
                            className="flex items-center text-[20px] sm:text-[24px] font-semibold mb-3 hover:text-[#111111] focus:outline-none"
                            style={{ color: '#111111' }}
                        >
                            Currently 
                            <Arrow direction={isCurrentExpanded ? 'down' : 'right'} />
                        </button>
                        
                        {isCurrentExpanded && (
                            <ul className="list-disc list-inside ml-8 text-[16px] sm:text-[18px] transition-all duration-300 ease-in-out" style={{ color: '#666666' }}>
                                <li className="mb-1">Building a flashcard generation pipeline for an EdTech startup.</li>
                                <li className="mb-1">Teaching robotics and programming to kids.</li>
                                <li className="mb-1">Building full-stack web applications for local businesses.</li>
                                <li className="mb-1">Second year Computer Science student at McMaster University.</li>
                            </ul>
                        )}
                    </div>

                    <div className="mb-12">
                        <button 
                            onClick={() => toggleExpansion('previous')}
                            className="flex items-center text-[20px] sm:text-[24px] font-semibold mb-3 hover:text-[#111111] focus:outline-none"
                            style={{ color: '#111111' }}
                        >
                            Previously 
                            <Arrow direction={isPreviousExpanded ? 'down' : 'right'} />
                        </button>
                        
                        {isPreviousExpanded && (
                            <ul className="list-disc list-inside ml-8 text-[16px] sm:text-[18px] transition-all duration-300 ease-in-out" style={{ color: '#666666' }}>
                                <li className="mb-1">Won the 2025 McMaster Engineering Competition for Engineering Consulting.</li>
                                <li className="mb-1">Taught Stanford's Code In Place 2025.</li>
                                <li className="mb-1">Defined the MVP for an AR/XR platform.</li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className="mt-28 mb-40 flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    <Link className="text-[#111111] hover:text-[#666666] transition-colors text-lg sm:text-2xl font-medium border-b-2 border-transparent hover:border-[#111111]" to="/about">about</Link>
                    <Link className="text-[#111111] hover:text-[#666666] transition-colors text-lg sm:text-2xl font-medium border-b-2 border-transparent hover:border-[#111111]" to="/experience">resume/cv</Link>
                    <Link className="text-[#111111] hover:text-[#666666] transition-colors text-lg sm:text-2xl font-medium border-b-2 border-transparent hover:border-[#111111]" to="/projects">projects</Link>
                    <Link className="text-[#111111] hover:text-[#666666] transition-colors text-lg sm:text-2xl font-medium border-b-2 border-transparent hover:border-[#111111]" to="/blog">blog</Link>
                    <Link className="text-[#111111] hover:text-[#666666] transition-colors text-lg sm:text-2xl font-medium border-b-2 border-transparent hover:border-[#111111]" to="/contact">contact</Link>
                </div>
            </div>
        </section>
    )
}