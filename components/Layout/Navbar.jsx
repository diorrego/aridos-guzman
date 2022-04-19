import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNavBar = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', updateNavBar);

    return () => {
      window.removeEventListener('scroll', updateNavBar);
    };
  }, []);

  const classes = {
    navContainer: `
      fixed
      inset-x-0
      top-0
      w-screen
      z-50
      h-14
      py-4
      pl-4
      sm:pl-36
      ${
        scrolled
          ? 'bg-gray-900/90 animation-spin text-slate-200'
          : 'bg-transparent subtitle animation-spin'
      }    
      `,
  };

  return <nav className={classes.navContainer}>Guzmán Empresas</nav>;
};

export default NavBar;
