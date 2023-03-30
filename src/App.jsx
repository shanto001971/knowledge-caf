import React from 'react';
import CardBody from './Component/CardBody/CardBody';
import Footer from './Component/CardBody/Footer';
import Header from './Component/Header/Header';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header/>
      <CardBody/>
      <Footer/>
    </div>
  );
};

export default App;