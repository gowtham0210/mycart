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

    if(action.type === "GET_TOTALS")
    {
    let {total , amount } = state.cart.reduce(
               (cartTotal, cartitem) =>{
                            const {price, amount} = cartitem;
                            const itemTotal = price * amount;

                            cartTotal.total += itemTotal;
                            cartTotal.amount += amount;
               },
               {
                total:0,
                amount:0,
               }
    );
    total  = parseFloat(total.toFixed(2));
    return {...state, total, amount};
    }

    if(action.type === "LOADING"){
        return {...state, loading:true}
    }
    if(action.type === "DISPLAY_ITEMS")
    {
        return {...state, cart:action.payload,loading:false};
    }
    if(action.type === "TOGGLE_AMOUNT"){
        let tempcart = state.cart.map((cartitem) =>{
            if(cartitem.id === action.payload){
                if(action.payload.type === "inc"){
                 return {...cartitem, amount:cartitem.amount + 1}
            }
        
            if(action.payload.type === "dec"){
                return {...cartitem, amount:cartitem.amount - 1}
            }
        } return cartitem;
        } ).filter((cartitem) => cartitem.amount !== 0);
        return {...state, cart: tempcart};
    }
    throw new Error("no matching Action type");
};

export default reducer;