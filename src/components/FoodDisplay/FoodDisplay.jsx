import React, { useContext } from 'react';
import './FoodDisplay.scss';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../FoodItem/Fooditem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    const filteredFoodList = category ? food_list.filter(food => food.category === category) : food_list;

    return (
        <div className='food-display' id='food-display'>
            <h2>Our products</h2>
            <div className="food-display-list">
                {filteredFoodList.map((item, index) => {
                    console.log(category, item.category);
                    if (category === "All" || category === item.category) {
                        return (
                            <Fooditem 
                                key={item._id} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image} 
                            />
                        );
                    } else {
                        return null; 
                    }
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
