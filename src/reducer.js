

const reducer = (state, action) =>{
    if(action.type === "CLEAR_CART")
    {
        return {...state, cart:[]};
    }
    if(action.type === "REMOVE")
    {
        return{
            ...state, cart: state.cart.filter((cartitem) => cartitem.id !== action.payload),
        };
    }
    if(action.type === "INCREASE"){
        let tempcart = state.cart.map((cartitem) =>{
            if(cartitem.id === action.payload){
                return {
                    ...cartitem,
                    amount:cartitem+1
                };
            }
            return cartitem;
        })
        return {...state, cart:tempcart}
    }
    if(action.type === "DECREASE"){
        let tempcart = state.cart.map((cartitem) =>{
            if(cartitem.id === action.payload){
                return {
                    ...cartitem,
                    amount:cartitem-1
                };
            }
            return cartitem;
        }).filter((cartitem) => cartitem !==0)
        return {...state, cart:tempcart}
    }
};

export default reducer;