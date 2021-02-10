import React from 'react';
import { useThemeContext } from 'providers/ThemeProvider';
import PulseLoader from 'react-spinners/PulseLoader';
import styles from './Loading.module.scss';

const Loading = () => {
  const { themeIsLight } = useThemeContext();
  const loaderColor = themeIsLight ? '#000000' : '#ffffff';

  return (
    <div className={styles.loadingWrapper}>
      <PulseLoader color={loaderColor} size="1rem" />
      {/* TO DO: Accessibility sr-only element and test <span></span> */}
    </div>
  );
};

export default Loading;
