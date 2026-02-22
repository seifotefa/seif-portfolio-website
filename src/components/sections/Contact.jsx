import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { WebringLinks } from '../WebringLinks';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
  
    const res = await fetch("https://formspree.io/f/mwplzlgb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
  
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(true);
    }
  };
  

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-24 bg-[#fff] text-[#111] mb-20 md:mb-0"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 text-center mt-32">
          <h2 className="text-5xl font-synonym font-light text-center mb-6" style={{ fontFamily: 'Synonym, monospace' }}>Let's Build Something</h2>
          <p className="mb-8 text-gray-400 text-lg">
            if you want to work with me, or have any inquiries, please send me a message and i will get back to you soon.
          </p>

          {submitted ? (
              <p className="text-green-400 text-lg">Thanks! Your message has been sent.</p>
              ) : error ? (
              <div className="text-red-400 text-sm">
                  <p className="mb-2">Sorry, this form has reached capacity.</p>
                  <p>
                  Please contact me directly at{" "}
                  <a
                      href="mailto:seifotefa@gmail.com"
                      className="underline text-[#111111] hover:text-[#666666]"
                  >
                      seifotefa@gmail.com
                  </a>
                  </p>
              </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#f3f3f3] border border-[#e5e5e5] text-[#111] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111111]"
                  />
                  <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#f3f3f3] border border-[#e5e5e5] text-[#111] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111111]"
                  />
                  <textarea
                  name="message"
                  rows="5"
                  placeholder="What's up?"
                  required
                  className="w-full bg-[#f3f3f3] border border-[#e5e5e5] text-[#111] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#111111]"
                  ></textarea>
                  <button
                  type="submit"
                  disabled={error}
                  className={`${
                      error
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#111111] hover:bg-[#333333]"
                  } text-white font-medium py-3 px-6 rounded-md transition`}
                  >
                  Send
                  </button>
              </form>
              )}

        </div>
      </section>
      
      {/* Bottom footer bar */}
      <div className="fixed left-0 right-0 bottom-0 z-50 bg-white border-t border-gray-200 px-4 py-3 md:px-8 md:py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
              <div className="flex items-center gap-3 md:gap-5">
                  <Link to="/about" className="font-medium text-[1rem] md:text-[1.25rem] underline underline-offset-2">Seif Otefa</Link>
                  <a href="https://github.com/seifotefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaGithub className="w-5 h-5 md:w-6 md:h-6" /></a>
                  <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaLinkedin className="w-5 h-5 md:w-6 md:h-6" /></a>
                  <a href="https://x.com/0xseifo" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black"><FaXTwitter className="w-5 h-5 md:w-6 md:h-6" /></a>
                  <Link to="/contact" className="text-gray-600 hover:text-black" aria-label="Contact"><FaEnvelope className="w-5 h-5 md:w-6 md:h-6" /></Link>
                  <a href="https://seifotefa.com/resume" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black" aria-label="Resume"><FaRegFileAlt className="w-5 h-5 md:w-6 md:h-6" /></a>
              </div>
              <WebringLinks variant="footer" />
              <p className="text-[0.85rem] md:text-[0.95rem] text-gray-600 leading-snug">
                  <Link to="/experience" className="underline underline-offset-2 hover:text-black">experience</Link>{' '}
                  <span className="mx-1">|</span>{' '}
                  <Link to="/projects" className="underline underline-offset-2 hover:text-black">projects</Link>{' '}
                  <span className="mx-1">|</span>{' '}
                  <Link to="/blog" className="underline underline-offset-2 hover:text-black">blog</Link>
              </p>
          </div>
      </div>
    </>
  );
};
