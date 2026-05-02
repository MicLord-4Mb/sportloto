import React, { useState, useEffect } from 'react';

import { ConfigProvider, theme as antdTheme } from 'antd';

import MainContent from './components/layers/MainContent';

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState( () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff'
        },
      }}
    >
      <MainContent isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </ConfigProvider>
  )
}
