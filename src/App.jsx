import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SiteNav, SiteFooter } from './components/SiteChrome';
import { Home } from './components/sections/Home';
import { Resume } from './components/sections/Resume';
import { Blog } from './components/sections/Blog';
import { BlogPost } from './components/sections/BlogPost';
import { Frontline } from './components/sections/blog/Frontline';
import { MoVA } from './components/sections/blog/MoVA';
import { CIP2025 } from './components/sections/blog/CIP2025';
import { Jinsa } from './components/sections/blog/Jinsa';
import { Phoenix } from './components/sections/blog/Phoenix';
import { ResuMock } from './components/sections/blog/ResuMock';
import { SparkAndPrepper } from './components/sections/blog/SparkAndPrepper';
import { StartupLessons } from './components/sections/blog/StartupLessons';
import { Links } from './components/sections/Links';
import { Gallery } from './components/sections/Gallery';
import { BackboardLogbook } from './components/sections/BackboardLogbook';
import { Partnerships } from './components/sections/Partnerships';
import { WorkPage } from './components/sections/WorkPage';
import { ProjectsPage } from './components/sections/ProjectsPage';

// Blog posts get editorial typography overrides via .post-shell (see index.css).
const PostShell = ({ children }) => <div className="post-shell">{children}</div>;

const Shell = ({ children }) => {
  const { pathname } = useLocation();
  // /links is the link-in-bio page (QR code target): original standalone design, no site chrome.
  if (pathname === '/links') return <div className="standalone">{children}</div>;
  return (
    <div className="site" data-route={pathname === '/' ? 'home' : 'page'}>
      <a href="#content" className="skip-link">Skip to content</a>
      <SiteNav />
      <main id="content" className="site-main">{children}</main>
      <SiteFooter />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/frontline" element={<PostShell><Frontline /></PostShell>} />
        <Route path="/blog/mova" element={<PostShell><MoVA /></PostShell>} />
        <Route path="/blog/cip2025" element={<PostShell><CIP2025 /></PostShell>} />
        <Route path="/blog/jinsa" element={<PostShell><Jinsa /></PostShell>} />
        <Route path="/blog/phoenix" element={<PostShell><Phoenix /></PostShell>} />
        <Route path="/blog/mec2025" element={<Navigate to="/blog/phoenix" replace />} />
        <Route path="/blog/oec2026" element={<Navigate to="/blog/phoenix" replace />} />
        <Route path="/blog/resumock" element={<PostShell><ResuMock /></PostShell>} />
        <Route path="/blog/sparkandprepper" element={<PostShell><SparkAndPrepper /></PostShell>} />
        <Route path="/blog/startup-lessons" element={<PostShell><StartupLessons /></PostShell>} />
        <Route path="/blog/backboard" element={<PostShell><BackboardLogbook /></PostShell>} />
        <Route path="/blog/:slug" element={<PostShell><BlogPost /></PostShell>} />
        <Route path="/archive" element={<Gallery />} />
        <Route path="/gallery" element={<Navigate to="/archive" replace />} />
        <Route path="/links" element={<Links />} />
        <Route path="/partnerships" element={<Partnerships />} />
      </Routes>
    </Shell>
  </BrowserRouter>
);

export default App;
