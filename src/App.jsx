import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
import { About } from './components/sections/About';
import { Home } from './components/sections/Home';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Work } from './components/sections/Work';
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
import { Links } from './components/sections/Links';

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

// Home is now a long single page — allow scroll everywhere
const ScrollHandler = () => null;

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
            <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
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
            <Route path="/links" element={<Links />} />
          </Routes>
        </div>
        {/* Footer removed - site uses compact layout with bottom-left name/logos on Home */}
      </div>
    </BrowserRouter>
  );
};

export default App;