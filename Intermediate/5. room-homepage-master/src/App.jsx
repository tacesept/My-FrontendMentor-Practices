import { useState, useEffect } from 'react'
import SmallScreenHeader from './components/SmallScreenHeader'
import LargeScreenHeader from './components/LargeScreenHeader'
import Main from './components/Main'

function App() { 
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <SmallScreenHeader />
      ) : (
        <LargeScreenHeader />
      )}
      <Main />
    </>
  )
}

export default App
