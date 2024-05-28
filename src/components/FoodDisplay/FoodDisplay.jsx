import React, { useContext } from 'react';
import './FoodDisplay.scss';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../FoodItem/Fooditem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item) => {
                    return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
