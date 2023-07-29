import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect,useState } from 'react';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [DUMMY_MEALS,setDummyMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpError,setHttpError]=useState(null);
  useEffect(()=>{
    const fetchMeals=async ()=>{
        const response=await fetch('https://react-food-app-12590-default-rtdb.firebaseio.com/meals.json');
      const resposeData=await response.json();
      if(!response.ok){
        throw new Error('something went wrong!!');
      }
      const loadedMeals=[];
      for(const key in resposeData){
        loadedMeals.push({
          id:key,
          name:resposeData[key].name,
          description:resposeData[key].description,
          price:resposeData[key].price
        })
      }
      setDummyMeals(loadedMeals);
    }
    fetchMeals().catch(error=>{
      setHttpError(true);
    })
    setIsLoading(false);

  },[])
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if(httpError){
    return(
      <div><p>Error occured</p></div>
    )
  }

  return (
    <section className={classes.meals}>
      {isLoading&&<p>Loading...</p>}
      {!isLoading&&<Card>
        <ul>{mealsList}</ul>
      </Card>}
    </section>
  );
};

export default AvailableMeals;
