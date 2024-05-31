import React from 'react';
import './ExploreMenu.scss';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explore-Menu' id='Explore-menu'>
      <h1>Explore our menu</h1>
      <div className="Explore-Menu-List">
        {menu_list.map((item, index) => {
          return(
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Explore-Menu-List-Item'>
                  <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                  <p>{item.menu_name}</p>
              </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
