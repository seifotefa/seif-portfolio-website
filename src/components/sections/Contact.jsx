import { useState } from "react";

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
        className="scroll-mt-24 bg-[#fff] text-[#111]"
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
                      className="underline text-[#4A90E2] hover:text-[#357ABD]"
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
                  className="w-full bg-[#f3f3f3] border border-[#e5e5e5] text-[#111] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                  />
                  <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#f3f3f3] border border-[#e5e5e5] text-[#111] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                  />
                  <textarea
                  name="message"
                  rows="5"
                  placeholder="What's up?"
                  required
                  className="w-full bg-[#f3f3f3] border border-[#e5e5e5] text-[#111] px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                  ></textarea>
                  <button
                  type="submit"
                  disabled={error}
                  className={`${
                      error
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#4A90E2] hover:bg-[#357ABD]"
                  } text-white font-medium py-3 px-6 rounded-md transition`}
                  >
                  Send
                  </button>
              </form>
              )}

        </div>
      </section>
    </>
  );
};
