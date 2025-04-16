
import React from 'react';
import { NavLink } from 'react-router-dom';

const MealCards = ({ detail }) => {
     return (
          <div className='meals'>
               {detail.length === 0 ? (
                    <p>No meals found. Try searching for something else.</p>
               ) : (
                    detail.map((currentItem) => {
                         return (
                              <div className='mealImg' key={currentItem.idMeal}>
                                   <img src={currentItem.strMealThumb} alt={currentItem.strMeal} />
                                   <p>{currentItem.strMeal}</p>
                                   <NavLink to={`${currentItem.idMeal}`}>
                                        <button>Recipe</button>
                                   </NavLink>
                              </div>
                         );
                    })
               )}
          </div>
     );
}

export default MealCards;
