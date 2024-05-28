import React, { useContext } from 'react'
import './Fooditem.scss'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const Fooditem = ({id,name,price,description,image}) => {

                                                                    
  const{cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
         <img className='food-item-image' src={image} alt="" />
         {!cartItems[id]                                                                                             /*El ! es para que el itemCount no sea 0*/ 
            ?<img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="" />  /*Le añadimos un signo de + debajo de cada item par que lo podamos meter en el carrito, al pulsar paso de un estado 0 a 1*/
            :<div className='food-item-counter'>    
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />                                   
             </div>                                                                                                /*Cuando pulsamos el + pasara a este estado de div*/
         }
      </div>
      <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-descr">{description}</p>
          <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default Fooditem

