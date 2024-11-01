import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import "./P5Wrapper.scss"

export const P5Wrapper = ({ sketch }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <div
    className='P5Wrapper'
    ref={canvasRef} 
    style={{ width: '100%', height: '600px' }}>
    <div className='P5Wrapper__title'>Interactive P5js Sketch</div>
    </div>;
};

export default P5Wrapper;