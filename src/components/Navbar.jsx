import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ toggleMenu }) => {
  return (
    <div className={styles.overlayNavbar}>
      <div>
        <a href="https://facebook.com/paulinlight">Sneaker Symphony</a>
      </div>
      <div className={styles.navLinks}>
        <a
          href="https://www.facebook.com/yourfacebookpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="#contact-us">Message me to Avail</a>
        <a href="#contact-owner"></a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
