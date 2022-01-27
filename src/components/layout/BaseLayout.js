import React from 'react';
import Footer from '../app/Footer';
import Header from '../app/Header';
import './baseLayout.css';

export default function BaseLayout({children, onNext, currentScreenIndex}) {
  return(
    <div className='main'>
      <div className='wrapper'>
        <Header />
        {children}
        <Footer onNext={onNext} currentScreenIndex={currentScreenIndex}/>
      </div>
    </div>
  )
}