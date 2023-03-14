import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainRoutes from './components/Main/MainRoutes';
import Footer from './components/Footer/Footer';

function App() {
   return (
      <>
         <Header />
         <MainRoutes />
         <Footer />
      </>
   );
}

export default App;
