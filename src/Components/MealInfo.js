import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // import useNavigate

const MealInfo = () => {

     const { mealId } = useParams();
     const [info, setInfo] = useState(null);
     const [error, setError] = useState(false);
     const navigate = useNavigate(); // Initialize navigate

     useEffect(() => {
          const getInfo = async () => {
               try {
                    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
                    const jsonData = await get.json();

                    if (jsonData.meals) {
                         setInfo(jsonData.meals[0]);
                         setError(false);
                    } else {
                         setError(true);
                    }
               } catch (err) {
                    setError(true);
               }
          };

          getInfo();
     }, [mealId]);

     if (error) {
          return <h2>Error: Could not load the meal details. Please try again later.</h2>;
     }

     if (!info) {
          return <h2>Loading...</h2>;
     }

     return (
          <div className="mealInfo">
               <img src={info.strMealThumb} alt={info.strMeal} />
               <div className="info">
                    <h1>{info.strMeal}</h1>
                    <h3>Instructions</h3>
                    <p>{info.strInstructions}</p>
                    <button onClick={() => navigate('/')}>Back to Home</button>
               </div>
          </div>
     );
};

export default MealInfo;
