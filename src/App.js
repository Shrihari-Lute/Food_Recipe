import './App.css';
import MainPage from './Components/MainPage';
import MealInfo from './Components/MealInfo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:mealId" element={<MealInfo />} />
    </Routes>

  );
}

export default App;