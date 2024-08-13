import React from 'react';
import styles from './IframeContainer.module.css';

const IframeContainer = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://565590540.x.yupoo.com/albums"
        title="Sneaker Symphony Gallery"
        className={styles.iframe}
      ></iframe>
      <div className={styles.iframeOverlay}></div>
    </div>
  );
};

export default IframeContainer;
