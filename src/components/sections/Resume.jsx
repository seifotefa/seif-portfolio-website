import React, { useEffect, useState } from 'react';

export const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState('/assets/SeifOtefaResume.pdf');

  useEffect(() => {
    document.body.style.overflow = 'auto';
    setPdfUrl(`${window.location.origin}/assets/SeifOtefaResume.pdf`);
  }, []);

  return (
    <div className="min-h-screen text-[#111] py-7 flex flex-col justify-center">
      <div className="max-w-3xl w-full mx-auto rounded-2xl px-5 md:px-8 pt-6 md:pt-8 pb-8 bg-white/60">
        <div className="flex items-baseline justify-between mb-4 pt-14 md:pt-10">
          <h1 className="font-[600] text-base md:text-lg text-[#111]">resume</h1>
          <a
            href={pdfUrl}
            download="SeifOtefaResume.pdf"
            className="hl text-xs text-gray-500 font-mono-desc"
          >
            download PDF
          </a>
        </div>

        <div className="w-full h-[calc(100vh-220px)] min-h-[600px] border border-gray-200 rounded-lg overflow-hidden bg-white">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title="resume PDF"
          />
        </div>
      </div>
    </div>
  );
};
