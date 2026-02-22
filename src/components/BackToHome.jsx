import { useLocation, useNavigate } from 'react-router-dom'

export const BackToHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
  
  const handleClick = () => {
    if (isBlogPost) {
      navigate('/blog');
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-6 left-6 z-[100] text-gray-500 hover:text-[#111111] transition-colors inline-flex items-center justify-center bg-transparent border-0 cursor-pointer"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  )
} 