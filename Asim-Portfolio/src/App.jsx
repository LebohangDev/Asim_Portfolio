
import { useState, useRef, useEffect } from 'react';
import Home from './Home/Home';
import Impact from './Impact/Impact';
import Product from './Product/Product';
import Gallery from './Gallery/Gallery';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';


function App() {

  const [activeNav, setActiveNav] = useState('Home');
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    const sections = ['Home', 'Impact', 'Product', 'Gallery'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);





  return (
    <div className="app" ref={containerRef} >
      <div className={'header'} >
        <Nav activeNav={activeNav} setActiveNav={setActiveNav} containerRef={containerRef} />

      </div>

      <div className="main">

        <div className={activeNav === 'Home' ? 'active' : 'home'}>
          <Home />

        </div>
        <div className={activeNav === 'Impact' ? 'active' : 'impact'}>
          <Impact />

        </div>
        <div className={activeNav === 'Product' ? 'active' : 'product'}>
          <Product />

        </div>
        <div className={activeNav === 'Gallery' ? 'active' : 'gallery'}>
          <Gallery />

        </div>
      </div>

      <div className="footer">
        <Footer setActiveNav={setActiveNav} />
      </div>

    </div>
  );
}

export default App;
