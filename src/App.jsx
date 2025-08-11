import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
import { About } from './components/sections/About';
import { Home } from './components/sections/Home';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Blog } from './components/sections/Blog';
import { BlogPost } from './components/sections/BlogPost';
import { HorizontalNav } from './components/HorizontalNav';

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

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navbar temporarily removed */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </div>
        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50 }}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;