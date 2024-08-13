import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} id="menu">
      <a
        href="https://www.facebook.com/yourfacebookpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a href="#contact-us">Contact Us</a>
    </div>
  );
};

export default Menu;
