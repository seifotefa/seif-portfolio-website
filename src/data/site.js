// Single source of truth for portfolio content.
// Titles, dates and descriptions come from the previous site + blog frontmatter — don't embellish.

export const socials = [
  { label: 'Email', href: 'mailto:seifotefa@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/seif-otefa' },
  { label: 'GitHub', href: 'https://github.com/seifotefa' },
  { label: 'X', href: 'https://x.com/0xseifo' },
  { label: 'Instagram', href: 'https://www.instagram.com/seifoai/' },
]

export const navLinks = [
  { label: 'links', to: '/links' },
  { label: 'archive', to: '/archive' },
  { label: 'resume', to: '/resume' },
]

// `featured` = current/main roles; the rest are listed under "earlier".
export const experience = [
  {
    org: 'TD',
    logo: '/assets/logos/td.svg',
    role: 'Quality Engineer',
    when: 'Winter 2027',
    status: 'Incoming',
    featured: true,
  },
  {
    org: 'Backboard',
    logo: '/assets/logos/backboard_io_logo.png',
    href: 'https://backboard.io',
    role: 'Member of Technical Staff',
    detail: 'Intern, summer 2026 — now part-time. Built Backboard Studio and helped launch the Ambassador program.',
    when: '2026 — Now',
    link: { to: '/blog/backboard', label: 'Read the logbook' },
    featured: true,
  },
  {
    org: 'McMaster University',
    logo: '/assets/logos/mcmaster.png',
    href: 'https://future.mcmaster.ca/programs/computer-science/',
    role: 'Teaching Assistant, Computer Science',
    detail: 'Also engineering competition consulting lead.',
    when: 'Current',
    featured: true,
  },
  {
    org: 'Stanford — Code in Place',
    logo: '/assets/logos/stanford.png',
    role: 'Section Leader, CS106A',
    detail: 'Taught programming fundamentals to 15+ students.',
    when: 'Spring 2025',
    link: { to: '/blog/cip2025', label: 'Read more' },
    featured: true,
  },
  { org: 'MoVA Realities', logo: '/assets/logos/mova-logo.png', href: 'https://www.movarts.com/', role: 'Product Manager Intern', when: '2025' },
  { org: 'Ludera', logo: '/assets/logos/luderalearning_logo.png', role: 'Software Engineer Intern' },
  { org: 'Obotz Robotics', logo: '/assets/logos/obotz.png', role: 'Robotics Instructor' },
]

// `img` = real screenshot or existing asset; null renders a replaceable placeholder.
export const projects = [
  {
    name: 'GTA: THE 6',
    href: 'https://gta-the-6.onrender.com/',
    img: '/assets/shots/gta.jpg',
    description: 'A GTA-inspired Toronto project.',
    category: 'Web game',
    award: 'Hackathon winner',
    featured: true,
  },
  {
    name: 'Frontline',
    href: 'https://github.com/seifotefa/deltahacks-12',
    post: '/blog/frontline',
    img: '/assets/shots/frontline.jpg',
    description: 'AI first-aid triage from camera vitals and vision.',
    category: 'AI · Computer vision · Healthcare',
    year: '2026',
    award: 'Hackathon winner',
    featured: true,
  },
  {
    name: 'Notipply',
    href: 'https://www.notipply.com/',
    img: '/assets/shots/notipply.jpg',
    pos: 'left center',
    description: 'Job alerts sent by text.',
    category: 'Product',
    featured: true,
  },
  {
    name: 'Notchii',
    href: 'https://notchii.xyz',
    img: '/assets/shots/notchii.jpg',
    pos: 'center top',
    description: 'Share and discover what people are listening to.',
    category: 'macOS app',
    featured: true,
  },
  {
    name: 'Project Phoenix',
    to: '/blog/phoenix',
    img: '/assets/shots/phoenix.jpg',
    description: 'Our winning engineering competition project — the future of healthcare in Canada.',
    category: 'Consulting · MEC 2026',
    award: '1st place',
    featured: true,
  },
  {
    name: 'alsatlas',
    href: 'https://github.com/seifotefa/alsatlas',
    img: null,
    description: 'Accessible ALS symptom tracking for progression research.',
    category: 'Health · Accessibility',
    award: '2× winner',
  },
  {
    name: 'Bountic',
    href: 'https://github.com/Youseph-Elkhouly/Bountic',
    img: null,
    description: 'A bounty marketplace for autonomous AI agents.',
    category: 'AI agents',
    award: 'Hackathon winner',
  },
  {
    name: 'ResuMock',
    href: 'https://github.com/seifotefa/deltahackslite',
    img: '/assets/shots/resumock.jpg',
    description: 'Practice interviews from your résumé.',
    category: 'AI · Hackathon',
    year: '2025',
  },
  {
    name: 'Jinsa',
    href: 'https://usejinsa.co',
    img: '/assets/jinsalogo.png',
    contain: true,
    description: 'Trackable, verifiable products.',
    category: 'Blockchain · Startup',
    year: '2025',
  },
  {
    name: 'Spark and Prepper',
    href: 'https://github.com/seifotefa/sparkandprepper',
    img: '/assets/shots/sparkandprepper.jpg',
    description: 'Study tools generated from your notes.',
    category: 'AI · Education',
    year: '2025',
  },
  {
    name: 'McMaster Webring',
    href: 'https://www.mcmasterwebring.xyz/',
    img: '/assets/shots/webring.jpg',
    description: 'A network of builders at McMaster.',
    category: 'Community',
  },
]

export const writing = [
  { title: 'My summer at Backboard', to: '/blog/backboard', date: 'Aug 2026', topic: 'Startups', summary: 'Building Backboard Studio, launching the ambassador program, and the work around it.' },
  { title: 'Lessons from joining an early stage startup', to: '/blog/startup-lessons', date: 'Jun 2026', topic: 'Startups', summary: 'Ambiguity, structure, and agency — what my first month at backboard.io taught me.' },
  { title: 'Project Phoenix — MEC & OEC 2026', to: '/blog/phoenix', date: 'Feb 2026', topic: 'Competitions', summary: 'First place at MEC, then the Ontario Engineering Competition in Ottawa.' },
  { title: "Teaching Stanford's CS106A", to: '/blog/cip2025', date: 'Jun 2025', topic: 'Teaching', summary: 'Teaching programming fundamentals to 15+ students as a Stanford section leader.' },
]

export const topics = ['AI & technology', 'Startups & entrepreneurship', 'Technology & culture', 'Personal essays']

// Homepage feed: anything with a write-up gets a card (work, projects and writing combined).
// Newest first. `layout`: full (spans the grid) or half (two per row). `also` = a related write-up.
// Jinsa is held back until it's rewritten — it appears as a plain link instead.
export const entries = [
  {
    title: 'Backboard',
    layout: 'full',
    kind: 'Work',
    date: 'Summer 2026',
    to: '/blog/backboard',
    img: '/assets/cards/backboard-hero.jpg', // Backboard's own hero artwork (backboard.io)
    badge: '/assets/logos/backboard-wordmark.svg',
    summary: 'Member of Technical Staff. Building Backboard Studio, launching the ambassador program, and the work around it.',
    also: { title: 'Lessons from joining an early stage startup', to: '/blog/startup-lessons' },
  },
  {
    title: 'Project Phoenix — MEC & OEC 2026',
    layout: 'half',
    kind: 'Competition',
    date: 'Feb 2026',
    to: '/blog/phoenix',
    img: '/assets/shots/phoenix.jpg',
    summary: 'First place in consulting at MEC 2026, then representing McMaster at the Ontario Engineering Competition at Carleton.',
    award: '1st place MEC'
  },
  {
    title: 'Frontline',
    layout: 'half',
    kind: 'Project',
    date: 'Jan 2026',
    to: '/blog/frontline',
    img: '/assets/shots/frontline-team.jpg',
    pos: '38% center',
    summary: 'AI-powered emergency triage using camera-based vitals monitoring and real-time injury detection.',
    award: 'Hackathon winner',
  },
  {
    title: 'Code in Place — Stanford',
    layout: 'full',
    kind: 'Teaching',
    date: 'Jun 2025',
    to: '/blog/cip2025',
    img: '/assets/shots/cip.jpg',
    summary: 'Teaching programming fundamentals (CS106A) to 15+ students as a Stanford section leader.',
  },
]

// Earlier roles shown under the feed (MoVA links to its write-up).
export const previousWork = [
  { name: 'MoVA Realities', role: 'a product manager intern', to: '/blog/mova', logo: '/assets/logos/mova-logo.png' },
  { name: 'Ludera', role: 'a software engineer intern', logo: '/assets/logos/luderalearning_logo.png' },
  { name: 'Obotz Robotics', role: 'a robotics instructor', logo: '/assets/logos/obotz.png' },
]

// Projects without a write-up (or with one still being rewritten): plain links under the feed.
export const moreLinks = [
  { name: 'GTA: THE 6', href: 'https://gta-the-6.onrender.com/' },
  { name: 'Notipply', href: 'https://www.notipply.com/' },
  { name: 'Notchii', href: 'https://notchii.xyz' },
  { name: 'alsatlas', href: 'https://github.com/seifotefa/alsatlas' },
  { name: 'Bountic', href: 'https://github.com/Youseph-Elkhouly/Bountic' },
  { name: 'Jinsa', href: 'https://usejinsa.co' },
  { name: 'ResuMock', to: '/blog/resumock' },
  { name: 'Spark and Prepper', to: '/blog/sparkandprepper' },
  { name: 'McMaster Webring', href: 'https://www.mcmasterwebring.xyz/' },
]
