import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import Feature from './feature/feature';
import './style.css'
import Footer from './footer/footer';
import Search from './search/search';


export class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Feature />
      <Footer />
      <Search />
      </>
    )
  }
}

export default App

