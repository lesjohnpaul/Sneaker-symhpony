import React from 'react';
import styles from '../components/Navbar.module.css';

const Navbar = ({ toggleMenu }) => {
  return (
    <div className={styles.overlayNavbar}>
      <div className={styles.navLogo}>
        <a href="https://facebook.com/paulinlight">Sneaker Symphony</a>
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
