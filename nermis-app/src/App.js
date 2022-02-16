import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'

class App extends Component {
render() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Products/>
    <Contact/>
    <Footer/>
    </>

  );
}
}

export default App;
