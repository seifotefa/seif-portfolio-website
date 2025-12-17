import React, { useEffect, useState } from 'react';

export const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState('/assets/SeifOtefaResume.pdf');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Ensure body can scroll on this page
    document.body.style.overflow = 'auto';
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'block';
    
    // Use absolute URL to ensure correct path
    const absoluteUrl = `${window.location.origin}/assets/SeifOtefaResume.pdf`;
    setPdfUrl(absoluteUrl);
    
    // Verify PDF is accessible
    fetch(absoluteUrl, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <section className="bg-[#fff] text-[#111] min-h-screen flex flex-col">
      <div className="flex-1 w-full h-full pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-full">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-synonym font-light mb-4" style={{ fontFamily: 'Synonym, monospace' }}>
              Resume
            </h1>
            <div className="flex justify-center items-center gap-4">
              <a 
                href={pdfUrl} 
                download="SeifOtefaResume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f3f3f3] text-[#111] border border-[#e5e5e5] rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium"
                title="Download Resume PDF"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-[calc(100vh-200px)] min-h-[600px] border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white">
            <iframe 
              src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              className="w-full h-full border-0"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

