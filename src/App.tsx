import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div
      style={{
        backgroundImage: "url(images/Vector.png)",
      }}
      className="object-center bg-center bg-cover overflow-hidden h-screen bg-black text-white">
        <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
