import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import { Navbar } from './components/Navbar';
import { About } from './components/sections/About';
import { Home } from './components/sections/Home';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Resume } from './components/sections/Resume';
import { HorizontalNav } from './components/HorizontalNav';
import { Blog } from './components/sections/Blog';
import { BlogPost } from './components/sections/BlogPost';
import { Frontline } from './components/sections/blog/Frontline';
import { MoVA } from './components/sections/blog/MoVA';
import { CIP2025 } from './components/sections/blog/CIP2025';
import { Jinsa } from './components/sections/blog/Jinsa';
import { MEC2025 } from './components/sections/blog/MEC2025';
import { OEC2026 } from './components/sections/blog/OEC2026';
import { ResuMock } from './components/sections/blog/ResuMock';
import { SparkAndPrepper } from './components/sections/blog/SparkAndPrepper';

// Wrapper component to conditionally show HorizontalNav
const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      {!isHomePage && <HorizontalNav />}
      {children}
    </>
  );
};

// Component to handle scroll prevention on home page
const ScrollHandler = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    if (isHomePage) {
      // Prevent scrolling on home page
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      // Allow scrolling on other pages
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isHomePage]);
  
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navbar temporarily removed */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/blog/frontline" element={<PageWrapper><Frontline /></PageWrapper>} />
            <Route path="/blog/mova" element={<PageWrapper><MoVA /></PageWrapper>} />
            <Route path="/blog/cip2025" element={<PageWrapper><CIP2025 /></PageWrapper>} />
            <Route path="/blog/jinsa" element={<PageWrapper><Jinsa /></PageWrapper>} />
            <Route path="/blog/mec2025" element={<PageWrapper><MEC2025 /></PageWrapper>} />
            <Route path="/blog/oec2026" element={<PageWrapper><OEC2026 /></PageWrapper>} />
            <Route path="/blog/resumock" element={<PageWrapper><ResuMock /></PageWrapper>} />
            <Route path="/blog/sparkandprepper" element={<PageWrapper><SparkAndPrepper /></PageWrapper>} />
            <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </div>
        {/* Footer removed - site uses compact layout with bottom-left name/logos on Home */}
      </div>
    </BrowserRouter>
  );
};

export default App;