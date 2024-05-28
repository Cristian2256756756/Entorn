import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>  {

    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){                                      /*Si cartItems no es "available"*/
            setCartItems((prev)=>({...prev,[itemId]:1}))             /*Si es la primera vez que el cliente añade un producto en el carrito*/ 
        }    
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId+1]}))
        }                              
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue= {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider