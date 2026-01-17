import { useState, useEffect } from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // At the top of the page - show top bar
        setShowTopBar(true);
      } else {
        // Scrolled down - hide top bar
        setShowTopBar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Header with slide animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 absolute'
        }`}
      >
        <TopHeader />
      </div>
      
      {/* Navbar - always visible */}
      <div className={`transition-all duration-300 ${showTopBar ? '' : ''}`}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
