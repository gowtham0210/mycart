import React from 'react'
import Cartitem from './Cartitem';
import {useGlobalContext} from './Context'

function CartContainer() {
    const {cart, total, clearcart} = useGlobalContext();
    if(cart.length === 0){
        return(
            <section className='cart'>
            <header>
                <h2>Your wishlist</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
            </section>
        )

    }
  return (
    <section className='cart'>
        <header>
            <h2>your wishlist</h2>
        </header>
        <div>
            {cart.map((item) =>{
                return <Cartitem key={item.id} {...item} />
            })}
        </div>
        {/* cart footer */}
        <footer>
            <hr />
            <div className='cart-total'>
              <h4>total <span>₹{total * 75}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={clearcart}>clear cart</button>
        </footer>

    </section>
  )
}

export default CartContainer