import React from 'react';
import Web3 from './images/web3.jpg';
import Arrow from './images/arrow.png'

const Card3 = () => {
  return (
    <>
      <div className='container-fluid justify-content-evenly'>
    
      
        <div className='row justify-content-evenly'>
          <div className='col-md-5 pt-5' id="text2">
            <h1>Innovate with Speed</h1>
            <br />
            <h4 id="hide01">Create higher quality software, deliver on customer<br/> expectations and business goals</h4>
            <br />
            <br />
            <br />
            <button id="AI">DevOps   <img src={Arrow} width="30" height="30" id="arrow"/></button>
          </div>
          <div className='col-md-6'>
            <img src={Web3} alt="Web1" id="web3"/>
            <br/>
            <div id='hide_show'>
           
            <h4>Create higher quality software, deliver on customer<br/> expectations and business goals</h4>
            <button id="AI2">DevOps   <img src={Arrow} width="30" height="30" id="arrow"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
