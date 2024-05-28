import React, { useState } from 'react'
import './Fooditem.scss'
import { assets } from '../../assets/assets'

const Fooditem = ({id,name,price,description,image}) => {

  const[itemCount,setItemCount] = useState(0)                                                                     /*Iniciar el carrito de compras con 0 items*/ 

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
         <img className='food-item-image' src={image} alt="" />
         {!itemCount                                                                                               /*El ! es para que el itemCount no sea 0*/ 
            ?<img className='add' onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />  /*Le añadimos un signo de + debajo de cada item par que lo podamos meter en el carrito*/
            :<div className='food-item-counter'>

            </div>
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

