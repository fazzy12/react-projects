import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navBar';
import HeroSection from './hero';
import Card from './cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Navbar/>
    <HeroSection/>
    <Card  
      img='image12.png'
      rating='5.0'
      reviewCount={6}
      country='USA'
      title='Life lessons with Katie Zaferes'
      price={136}
    />
    <Card  
      img='wedding-photography 1.png'
      rating='5.0'
      reviewCount={6}
      country='USA'
      title='Life lessons with Katie Zaferes'
      Price={136}
    />
    <Card  
      img='mountain-bike 1.png'
      rating='5.0'
      reviewCount={6}
      country='USA'
      title='Life lessons with Katie Zaferes'
      Price={136}
    />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
