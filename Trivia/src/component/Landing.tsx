

import React from 'react';
import group38 from '../images/Group38.png';
// import Genie from '../images/Genie-logo.png';
import '../landing.css';

function Landing() {
  return (
    <>
      <div className="container">
        {/* <div className="logo">
          <img src={Genie} alt="Logo" id='logo'/>
        </div> */}
        
         <div className="image">
          <img src={group38} alt="Group38" className='courage'/>
        </div> 
      </div>
    </>
  );
}

export default Landing;