import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import "./BannerWrapper.scss"

export const BannerWrapper = ({ sketch }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <div
    className='BannerWrapper'
    ref={canvasRef} 
    style={{ width: '100%', height: '600px' }}>
    </div>;
};

export default BannerWrapper;