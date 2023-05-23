import React from 'react';
import Web1 from './images/web1.jpg';
import Arrow from './images/arrow.png'

const Card1 = () => {
  return (
    <>
      <div className='container-fluid justify-content-evenly'>
      <div className='row'>
        <div className='col-md-12'>
            <h3 className='text1'>Let's Collaborate</h3>
        </div>
      </div>
        <div className='row justify-content-evenly'>
          <div className='col-md-5 pt-5' id="text2">
            <h1 >AI + RPA is what we do</h1>
            <br />
            <h4 id="hide01">Future-Proof your business. Drive efficiency,<br/> profitability and deliver on customer experience</h4>
            <br />
            <br />
            <br />
            <button id="AI">AI + RPA Automation    <img src={Arrow} width="30" height="30" id="arrow"/></button>
          </div>
          <div className='col-md-6'>
            <img src={Web1} alt="Web1" id="web1"/>
            <br></br>
            <div id='hide_show'>
            <h4 id="small">Future-Proof your business. Drive efficiency,<br/> profitability and deliver on customer experience</h4>
            <button id="AI2">AI + RPA Automation    <img src={Arrow} width="30" height="30" id="arrow"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
