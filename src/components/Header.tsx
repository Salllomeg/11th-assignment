import React from 'react';
import NotePencil from '../assets/NotePencil.png'

const Header: React.FC = () => {
  return (
    <header>
        <h1>To-Do NOW</h1>
        <div className="line"></div>
         <img src={NotePencil} className="NotePencil" />
        <div className="line"></div>
      </header> 
  );
};

export default Header;
