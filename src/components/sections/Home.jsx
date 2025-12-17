import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section className="min-h-screen bg-white relative">
            {/* Top text section removed per request */}

            {/* Name + social icons bottom-left + 3-line tagline */}
            <div className="fixed left-10 bottom-10 md:left-16 md:bottom-16 z-50 flex flex-col items-start gap-3 text-gray-700">
                <div className="flex items-center gap-5">
                    <Link to="/about" className="font-medium text-[1.5rem] underline underline-offset-2">Seif Otefa</Link>
                    <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaGithub className="w-7 h-7" /></a>
                    <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaLinkedin className="w-7 h-7" /></a>
                    <Link to="/contact" className="text-gray-600 hover:text-black" aria-label="Contact"><FaEnvelope className="w-7 h-7" /></Link>
                    <a href="https://seifotefa.com/resume" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black" aria-label="Resume"><FaRegFileAlt className="w-7 h-7" /></a>
                </div>
                <p className="text-[1.05rem] text-gray-600 leading-snug">
                    full-stack developer, robotics instructor, studying computer science @mcmasteru
                </p>
                <p className="text-[1.05rem] text-gray-600 leading-snug">
                    <Link to="/blog/mec2025" className="underline underline-offset-2 hover:text-black">macengcomp25 winner</Link>,{' '}
                    <Link to="/blog/cip2025" className="underline underline-offset-2 hover:text-black">stanford code in place section leader</Link>
                </p>
                <p className="text-[1.05rem] text-gray-600 leading-snug">
                    prev. swe @ludera, product @mova
                </p>
                <p className="text-[1.05rem] text-gray-600 leading-snug">
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