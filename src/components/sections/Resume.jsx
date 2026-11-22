import { useEffect, useState } from 'react';

export const Resume = () => {
  const [pdfUrl, setPdfUrl] = useState('/assets/SeifOtefaResume.pdf');

  useEffect(() => {
    document.title = 'Seif Otefa | Resume';
    setPdfUrl(`${window.location.origin}/assets/SeifOtefaResume.pdf`);
    return () => { document.title = 'Seif Otefa'; };
  }, []);

  return (
    <>
      <h1 className="page-title">Resume</h1>
      <p className="lede"><a href={pdfUrl} download="SeifOtefaResume.pdf">Download PDF</a></p>
      <div className="resume-frame">
        <iframe src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`} title="Seif Otefa resume (PDF)" />
      </div>
    </>
  );
};
