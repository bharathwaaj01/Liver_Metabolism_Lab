import React from 'react';
import './tailwind.css'
import './App.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
function App() {
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
