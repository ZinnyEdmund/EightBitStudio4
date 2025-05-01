

import React from 'react';
import group38 from '../images/Group38.png';
import Genie from '../images/Genie-logo.png';
import Avatar from '../images/Avatar.png';
import First from '../images/First.png';
import Second from '../images/second.png';
import Vector from '../images/Vector.png';
import '../Home.css';

function Home() {
  return (
    <>
      <div className="container">

        
         <div className="image">
          <img src={group38} alt="Group38" className='courage'/>
        </div>
        <div className="header">
          <img src={Genie} alt="Logo" id='head'/>
          <img src={Avatar} alt="Logo" id='head'/>
          <img src={First} alt="Logo" id='head'/>
          <img src={Second} alt="Logo" id='head'/>
          <img src={Vector} alt="Logo" id='head'/>
        </div>
      </div>
    </>
  );
}

export default Home;