
import { useState, useRef, useEffect } from 'react';
import Home from './Home/Home';
import Impact from './Impact/Impact';
import Product from './Product/Product';
import Gallery from './Gallery/Gallery';
import PaymentSuccess from "./paymentPopups/PaymentSuccess.jsx";
import PaymentCancel from "./paymentPopups/PaymentCancel.jsx";
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';


function App() {

  const [activeNav, setActiveNav] = useState('Home');
  const [paymentActive, setPaymentActive] = useState(false);
  const containerRef = useRef(null);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive(true);
    if (payment === "cancel") setPaymentActive(true);
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

        <div className={activeNav === 'Gallery' ? 'active' : 'gallery'}>
          <Gallery />

        </div>
        <div className={paymentActive === true ? 'activeSection' : 'notActiveSection'}>
          <PaymentSuccess setPaymentActive={setPaymentActive} />
        </div>
        <div className={paymentActive === true ? 'activeSection' : 'notActiveSection'}>
          <PaymentCancel setPaymentActive={setPaymentActive} />
        </div>
      </div>

      <div className="footer">
        <Footer setActiveNav={setActiveNav} />
      </div>

    </div>
  );
}

export default App;
