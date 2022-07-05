import React from 'react';
import bag from './media/Icons/bag.svg';

function Navbar() {
  return (
    <div>
        <div className='nav-center'>
            <h3>Hot Deals</h3>
            <div className='nav-container'>
                <img src={bag} alt="bag" />

            </div>
        </div>
    </div>
  )
}

export default Navbar