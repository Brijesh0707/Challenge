import React from 'react';
import Web4 from './images/web4.jpg';
import Arrow from './images/arrow.png'

const Card4 = () => {
  return (
    <>
      <div className='container-fluid justify-content-evenly'>
     
        <div className='row justify-content-evenly'>
          <div className='col-md-5 pt-5' id="text2">
            <h1>Embrace Cloud</h1>
            <br />
            <h4 id="hide01">With Cloud-First accelerate innovation and optimize<br/> performance</h4>
            <br />
            <br />
            <br />
            <button id="AI">Cloud Service   <img src={Arrow} width="30" height="30" id="arrow"/></button>
          </div>
          <div className='col-md-6'>
            <img src={Web4} alt="Web1" id="web4"/>
            <br/>
            <div id='hide_show'>
    
        
            <h4>With Cloud-First accelerate innovation and optimize<br/> performance</h4>
            <button id="AI2">Cloud Service   <img src={Arrow} width="30" height="30" id="arrow"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card4;
