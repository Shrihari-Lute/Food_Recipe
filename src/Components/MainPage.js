
import React, { useState } from 'react';
import MealCards from './MealCards';

const MainPage = () => {
     const [data, setData] = useState([]);
     const [search, setSearch] = useState('');

     const handleInput = (event) => {
          setSearch(event.target.value);
     }

     const mealData = async () => {

          const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
          const jsonData = await get.json();

          // Handle case where no meals are found
          setData(jsonData.meals || []);
     }

     return (
          <>
               <h1 className='head'>Food Recipe App</h1>
               <div className='container'>
                    <div className="searchBar">
                         <input type='text' placeholder='Enter Your Dish' onChange={handleInput} />
                         <button onClick={mealData}>Search</button>
                    </div>

                    <div>
                         <MealCards detail={data} />
                    </div>
               </div>
          </>
     );
}

export default MainPage;
