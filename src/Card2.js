import React from 'react';
import Web2 from './images/web2.png';
import Arrow from './images/arrow.png'

const Card2 = () => {
  return (
    <>
      <div className='container-fluid justify-content-evenly'>
      
        <div className='row justify-content-evenly'>
          <div className='col-md-5 pt-5' id="text2">
            <h1>Make Bolder Choices</h1>
            <br />
            <h4 id="hide01">Digital focused strategies to realize market-changing<br/> ideas</h4>
            <br />
            <br />
            <br />
            
            <button id="AI">Build Better Apps    <img src={Arrow} width="30" height="30" id="arrow"/></button>
          </div>
          <div className='col-md-6'>
            <img src={Web2} alt="Web1" id="web2"/>
            <br/>
            <div id='hide_show'>
            <h4 id="small">Digital focused strategies to realize market-changing<br/> ideas</h4>
            <button id="AI2">Build Better Apps    <img src={Arrow} width="30" height="30" id="arrow"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
