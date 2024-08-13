import React, { useState } from 'react';
import Navbar from './components/Navbar';
import IframeContainer from './components/IframeContainer';
import Menu from './components/Menu';
import styles from './App.module.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.App}>
      <Navbar toggleMenu={toggleMenu} />
      <IframeContainer />
      <Menu isOpen={menuOpen} />
    </div>
  );
}

export default App;
