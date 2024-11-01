import { useEffect, useState } from 'react';
import './App.scss';
import { AboutSection } from './Components/AboutSection/AboutSection.jsx';
import { Header } from './Components/Header/Header.tsx';
import P5Wrapper from './Components/P5Wrapper/P5Wrapper.jsx';
import { Sketch1 } from './Sketches/sketch_1/sketch_1.jsx';
import { Sketch2 } from './Sketches/sketch_2/sketch_2.jsx';
import { Sketch3 } from './Sketches/sketch_3/sketch_3.jsx';
import { Sketch4 } from './Sketches/sketch_4 copy/sketch_4.jsx';
import { Footer } from './Components/Footer/Footer.jsx';


const sketches = [
  { id: 'sketch1', component: Sketch1 },
  { id: 'sketch2', component: Sketch2 },
  { id: 'sketch3', component: Sketch3 },
  { id: 'sketch4', component: Sketch4 },
];

function App() {
  const [activeSketches, setActiveSketches] = useState(Array(sketches.length).fill(false));
  const [visibleSketches, setVisibleSketches] = useState(Array(sketches.length).fill(false));

  const handleScroll = () => {
    sketches.forEach((sketch, index) => {
      const sketchElement = document.getElementById(sketch.id);
      if (sketchElement && sketchElement.getBoundingClientRect().top < window.innerHeight) {
        setVisibleSketches(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }
    });
  };

  const handleMouseEnter = (index) => {
    setActiveSketches(prev => {
      const newActive = [...prev];
      newActive[index] = true;
      return newActive;
    });
  };

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      setActiveSketches(prev => {
        const newActive = [...prev];
        newActive[index] = false;
        return newActive;
      });
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='App__body'>
        <AboutSection />
      </div>
      {sketches.map((sketch, index) => (
        <div 
          key={sketch.id} 
          id={sketch.id} 
          className={visibleSketches[index] ? 'active' : 'sketches'} 
          onMouseEnter={() => handleMouseEnter(index)} 
          onMouseLeave={() => handleMouseLeave(index)}
        >
          {visibleSketches[index] && <P5Wrapper sketch={activeSketches[index] ? sketch.component : null} />}
        </div>
      ))}
      <Footer />
    </div>
  );
}


export default App;
