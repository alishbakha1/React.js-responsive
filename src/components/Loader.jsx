import { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      if (onLoadComplete) onLoadComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`loader-screen ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">Alishba Sana</div>
      <div className="loader-spinner"></div>
      <p className="loader-tagline">Luxury Redefined</p>
    </div>
  );
};

export default Loader;
