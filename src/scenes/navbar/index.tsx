import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';
import textLogo from '@/assets/img_default/textLogo.png';

type NavLinksProps = {};

const NavLinks: React.FC<NavLinksProps> = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/AboutUs', text: 'About Us' },
    { to: '/Gallery', text: 'Gallery' },
    { to: '/Shop', text: 'Shop' },
    { to: '/Contact', text: 'Contact' },
  ];

  const [activeLink, setActiveLink] = useState<string | null>(navLinks[0].to);
  const [showBackground, setShowBackground] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // Add showLogo state
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavLinkClick = (to: string) => {
    setActiveLink(to);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuToggled(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setShowBackground(scrollPosition > threshold);
      setShowLogo(scrollPosition <= threshold); // Update showLogo state based on scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    // Render navigation links for medium and larger screens
    isAboveMediumScreens ? (
      <nav className="flex justify-center fixed top-0 z-30 mt-3 w-full ">
        <div className="flex  mt-2 justify-between gap-24 text-md text-beige-1">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => handleNavLinkClick(link.to)}
              className={`text-beige-1 transition duration-500 relative hover:text-orange-1 focus:text-orange-2 focus:outline-none p-3 -rotate-12 ${showBackground ? 'inline-block bg-black/60 ' : ''}`}
            >
              {activeLink === link.to && (
                <div className="flex gap-2" style={{ height: '1px', width: '100%', top: '5%' }}>
                  {/* Render active pill animation */}
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: 'spring', duration: 0., stiffness: 4000 }}
                    className="bg-beige-1 rounded-full border shadow-lg"
                    style={{ height: '1px', width: '100%', top: '10%' }}
                  />
                </div>
              )}

                <img src={textLogo} alt="Logo" className="h-4 " />

              <span className="relative mix-blend-exclusion">{link.text}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    ) : (
      // Render navigation links for smaller screens
      <nav className='flex w-full justify-center items-center z-30 fixed top-0 mt-4 '>
        <div className=' w-full px-8 flex justify-between items-center'>

          {showLogo ? ( // Render logo only when showLogo is true
            <img src={textLogo} alt="Logo" className="h-8 " />
          ): <div></div>}
          <button className="btn btn-circle btn-sm" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            {/* Render menu toggle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
          // Render menu dropdown for smaller screens when menu is toggled
          <motion.div ref={menuRef} className='fixed top-0 right-0 h-auto w-32 pt-2  rounded-xl bg-black'

          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {
              opacity: 0,

            },
            visible: {
              opacity: 1,

            },
          }}>

            <div className='flex  justify-end mr-9 mt-3'>
              <button  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                {/* Render close icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-7 pl-8 mb-8 ">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              </div>
              <div className="flex  flex-col justify-between items-center gap-8 mb-6 text-sm text-beige-1">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    onClick={() => handleNavLinkClick(link.to)}
                     className={`text-beige-1  -rotate-12 transition duration-500 relative hover:text-orange-1 focus:text-orange-2 focus:outline-none p-3 -rotate-12}`}
                  >


                     {activeLink === link.to && (
                <div className="flex gap-2" style={{ height: '1px', width: '100%', top: '5%' }}>
                  {/* Render active pill animation */}
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: 'spring', duration: 0., stiffness: 4000 }}
                    className="bg-beige-1 rounded-full border shadow-lg"
                    style={{ height: '1px', width: '100%', top: '20%' }}
                  />
                </div>
              )}


                    <span className="relative mix-blend-exclusion">{link.text}</span>
                  </NavLink>
                ))}

              </div>
            </motion.div>

        )}
      </nav>
    )
  );
};

const Navbar: React.FC = () => {
  return (
    // Render the navigation links component
    <NavLinks />
  );
};

export default Navbar;
