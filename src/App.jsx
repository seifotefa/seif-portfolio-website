import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/sections/Home';
import { Resume } from './components/sections/Resume';
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
import { StartupLessons } from './components/sections/blog/StartupLessons';
import { Links } from './components/sections/Links';
import { Gallery } from './components/sections/Gallery';

const PageWrapper = ({ children }) => children;

// Home is now a long single page — allow scroll everywhere
const ScrollHandler = () => null;

const App = () => {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/blog/frontline" element={<PageWrapper><Frontline /></PageWrapper>} />
            <Route path="/blog/mova" element={<PageWrapper><MoVA /></PageWrapper>} />
            <Route path="/blog/cip2025" element={<PageWrapper><CIP2025 /></PageWrapper>} />
            <Route path="/blog/jinsa" element={<PageWrapper><Jinsa /></PageWrapper>} />
            <Route path="/blog/mec2025" element={<PageWrapper><MEC2025 /></PageWrapper>} />
            <Route path="/blog/oec2026" element={<PageWrapper><OEC2026 /></PageWrapper>} />
            <Route path="/blog/resumock" element={<PageWrapper><ResuMock /></PageWrapper>} />
            <Route path="/blog/sparkandprepper" element={<PageWrapper><SparkAndPrepper /></PageWrapper>} />
            <Route path="/blog/startup-lessons" element={<PageWrapper><StartupLessons /></PageWrapper>} />
            <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
            <Route path="/archive" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/gallery" element={<Navigate to="/archive" replace />} />
            <Route path="/links" element={<PageWrapper><Links /></PageWrapper>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
