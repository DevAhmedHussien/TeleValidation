import React, { useState, useEffect } from 'react';

function InteractiveContent() {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setInactive(true);
      }, 5000); // 5 seconds
    };

    // Initialize the inactivity timer
    resetTimer();

    // Add event listeners to reset the timer when there's user activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, []);

  return (
    <div>
      {!inactive ? (
        // Render your interactive content here
        <div>
          <h2>Interactive Content</h2>
          {/* Add your interactive content components */}
        </div>
      ) : (
        // Render the promotional video and banner
        <h1>video ddddddddddddddddddddddddd</h1>
      )}
    </div>
  );
}

export default InteractiveContent;