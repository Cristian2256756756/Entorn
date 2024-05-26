import React from 'react';
import './ExploreMenu.scss';
import { menu_list } from '../../assets/assets';

const ExploreMenu = () => {
  return (
    <div className='Explore-Menu' id='Explore-menu'>
      <h1>Explore our menu</h1>
      <p className='Explore-Menu-Text'>
        Choose from a diverse menu with a lot of type of food from around all the world.
      </p>
      <div className="Explore-Menu-List">
        {menu_list.map((item, index) => {
          return(
              <div key={index} className='Explore-Menu-Item'>
                  <img src={item.menu_image} alt=""/>
                  <p>{item.menu_name}</p>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
