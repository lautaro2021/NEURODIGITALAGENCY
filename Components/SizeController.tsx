import { useState, useEffect } from 'react';

function getWindowDimensions() {
  let width:any = typeof window !== 'undefined' && window.innerWidth;
  let height:any = typeof window !== 'undefined' && window.innerHeight;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}