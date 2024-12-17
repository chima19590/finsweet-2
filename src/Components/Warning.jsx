import React, { useState, useEffect } from 'react';

const SmallResolutionWarning = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowWarning(window.innerWidth < 832); // Threshold for small resolution
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showWarning && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          width: '100vw', 
          height: '100vh',
          backgroundColor: '#ffffff', 
          color: 'black', 
          textAlign: 'center', 
          padding: '10px', 
          zIndex: 1000 
        }}>
          Warning: Your screen resolution is too small for optimal viewing.
        </div>
      )}
    </>
  );
};

export default SmallResolutionWarning;
