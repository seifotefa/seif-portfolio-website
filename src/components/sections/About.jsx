import React from "react";
import profilePic from "../../assets/seifstatueliberty.jpg"; 
import torontoPic from "../../assets/toronto.jpg";
import fujiPic from "../../assets/fujiii.jpg";
import arsenalPic from "../../assets/arsenal.jpg";
  
export const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
              <section id="about" className="bg-[#fff] text-[#111] px-6 md:px-12 pt-32 pb-20 mt-0 mb-10">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-synonym font-light text-center mb-8" style={{ fontFamily: 'Synonym, monospace' }}>Who Am I?</h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 text-center md:text-left">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-56 h-56 md:w-72 md:h-72 object-cover object-center rounded-lg border border-gray-600"
                />
                </div>

                {/* Bio Text */}
                <div className="w-full pt-4">
                <p className="text-base sm:text-lg leading-relaxed">
                    i'm a second year computer science student at mcmaster university with a passion for using technology to drive change and innovation. some of my interests are web3, ai, and software design and development, and how technology intersects with education, finance, and fun.
                    <br /><br />
                    i'm driven by a constant need to improve, whether that's mentally, academically, or physically, i always strive to be the best i can be at what i do.

                      
                </p>
                </div>
            </div>
            
            {/* Toronto Image - Mobile Only */}
            <div className="flex justify-center items-center mt-12 md:hidden">
                <img
                    src={torontoPic}
                    alt="Toronto"
                    className="w-48 h-48 object-cover object-center rounded-lg border border-gray-600"
                />
            </div>

            {/* Additional Paragraph */}
            <div className="mt-8 mb-16">
                <p className="text-base sm:text-lg leading-relaxed">
                    i also love to travel and explore new places, try new foods and explore different cultures. some of my favorite places i've visited are italy, thailand, japan, and england.
                    
                    {/* Fuji Image - Mobile Only */}
                    <div className="flex justify-center items-center my-6 md:hidden">
                        <img
                            src={fujiPic}
                            alt="Fuji"
                            className="w-48 h-48 object-cover object-center rounded-lg border border-gray-600"
                        />
                    </div>
                    
                    <br /><br /> i enjoy watching and playing soccer, 
                    and have watched some amazing games in person like arsenal vs manchester city, and liverpool vs real betis. when i am not studying or learning, you can find me at the gym or watching a tv show.

                    {/* Arsenal Image - Mobile Only */}
                    <div className="flex justify-center items-center my-6 md:hidden">
                        <img
                            src={arsenalPic}
                            alt="Arsenal"
                            className="w-48 h-48 object-cover object-center rounded-lg border border-gray-600"
                        />
                    </div>

                     <br /><br /> i'm always looking for new opportunities to learn, grow, or just chat about life and tech. feel free to reach out to me on <a href="https://linkedin.com/in/seif-otefa" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#111111] transition-colors text-[#111111] lg:text-inherit">linkedin</a> or email me at <a href="/contact" className="underline hover:text-[#111111] transition-colors text-[#111111] lg:text-inherit">seifotefa@gmail.com</a>.
                </p>
            </div>

            {/* Desktop Images - Hidden on Mobile */}
            <div className="hidden md:flex md:flex-row gap-6 mt-12 mb-20 justify-center items-center">
                <img
                    src={torontoPic}
                    alt="Toronto"
                    className="w-56 h-56 object-cover object-center rounded-lg border border-gray-600"
                />
                <img
                    src={fujiPic}
                    alt="Fuji"
                    className="w-56 h-56 object-cover object-center rounded-lg border border-gray-600"
                />
                <img
                    src={arsenalPic}
                    alt="Arsenal"
                    className="w-56 h-56 object-cover object-center rounded-lg border border-gray-600"
                />
            </div>
        </div>
        </section>


    </>
  );
};
