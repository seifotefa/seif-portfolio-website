import { Link } from 'react-router-dom'

export const BackToHome = () => {
  return (
    <Link 
      to="/" 
      className="fixed top-6 left-6 z-[100] text-gray-400 hover:text-gray-600 transition-colors"
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
        <polyline points="15,18 9,12 15,6" />
      </svg>
    </Link>
  )
} 