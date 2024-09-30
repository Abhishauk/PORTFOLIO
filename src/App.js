import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Work from './components/Work';
import MySkills from './components/MySkills';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-site bg-norepeat bg-cover overflow-hidden text-gradient ">
      <Header />
      <Banner />
      <About />
      <MySkills />
      <Work />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
