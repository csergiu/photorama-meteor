import React from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

export const MainLayout = ({content}) => (
  <div className="main-container">
    <Header />

    <div className="content-container">
      {content}
    </div>

    <Footer />
  </div>
);