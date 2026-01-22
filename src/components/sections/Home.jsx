import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section className="min-h-screen bg-white relative">
            {/* Top text section removed per request */}

            {/* Centered quote */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-3xl px-8">
                <p className="text-center text-lg md:text-2xl lg:text-3xl text-gray-800 leading-relaxed" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 300 }}>
                    Knowledge without action is <em>wastefulness</em> and action without knowledge is <em>foolishness</em>.
                </p>
            </div>

            {/* Name + social icons bottom-left + 3-line tagline */}
            <div 
                className="fixed left-4 bottom-4 md:left-10 md:bottom-10 lg:left-16 lg:bottom-16 z-50 flex flex-col items-start gap-3 md:gap-4 lg:gap-5 text-gray-700 origin-bottom-left"
                style={{ transform: 'scale(0.8)' }}
            >
                <div className="flex items-center gap-4 md:gap-6 lg:gap-7">
                    <Link to="/about" className="font-medium text-[1.65rem] md:text-[1.95rem] lg:text-[2.25rem] underline underline-offset-2">Seif Otefa</Link>
                    <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaGithub className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" /></a>
                    <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaLinkedin className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" /></a>
                    <a href="https://x.com/0xseifo" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaXTwitter className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" /></a>
                    <Link to="/contact" className="text-gray-600 hover:text-black" aria-label="Contact"><FaEnvelope className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" /></Link>
                    <a href="https://seifotefa.com/resume" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black" aria-label="Resume"><FaRegFileAlt className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" /></a>
                </div>
                <p className="text-[1.35rem] md:text-[1.425rem] lg:text-[1.575rem] text-gray-600 leading-snug">
                    full-stack developer, robotics instructor, studying computer science @mcmasteru
                </p>
                <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] text-gray-600 leading-snug">
                    <Link to="/blog/mec2025" className="underline underline-offset-2 hover:text-black">macengcomp25 winner</Link>,{' '}
                    <Link to="/blog/cip2025" className="underline underline-offset-2 hover:text-black">stanford code in place section leader</Link>
                </p>
                <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.4] text-gray-600 leading-snug">
                    prev. swe @ludera, product @mova
                </p>
                <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] text-gray-600 leading-snug">
                    <Link to="/experience" className="underline underline-offset-2 hover:text-black">experience</Link>{' '}
                    <span className="mx-1">|</span>{' '}
                    <Link to="/projects" className="underline underline-offset-2 hover:text-black">projects</Link>{' '}
                    <span className="mx-1">|</span>{' '}
                    <Link to="/blog" className="underline underline-offset-2 hover:text-black">blog</Link>
                </p>
            </div>
        </section>
    )
}