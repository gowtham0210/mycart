import React from 'react';
import bag from './media/Icons/bag.svg';

function Navbar() {
  return (
    <nav>
        <div className='nav-center'>
            <h3>Hot Deals</h3>
            <div className='nav-container'>
                <img src={bag} alt="bag" />
                <div className='amount-contained'>
                    <p className='total-amount'>5</p>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar