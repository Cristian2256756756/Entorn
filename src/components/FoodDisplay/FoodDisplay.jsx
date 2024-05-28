import React, { useContext } from 'react';
import './FoodDisplay.scss';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../FoodItem/Fooditem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);                                                       /*Coje todos los datos de food_list que mapeamos mas abajo*/

    const filteredFoodList = category ? food_list.filter(food => food.category === category) : food_list;

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {filteredFoodList.map((item, index) => (
                    <Fooditem 
                        key={item._id} 
                        id={item._id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
}

export default FoodDisplay;
