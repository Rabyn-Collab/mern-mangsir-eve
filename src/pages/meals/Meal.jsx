import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { baseUrl } from "../../lib/constants.js";
import axios from "axios";

export default function Meal() {
  const { id } = useParams();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();



  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(`${baseUrl}/lookup.php`, {
        params: {
          i: id
        }
      });

      setData(response.data);
      setLoad(false);

    } catch (err) {
      setErr(err.message);
      setLoad(false);

    }
  }


  useEffect(() => {
    getData();

  }, []);

  if (load) {
    return <h1>Loading...</h1>
  }
  if (err) {
    return <h1 className="text-red-700">{err}</h1>
  }

  // const m = "https://www.youtube.com/watch?v=CiY6ZOYRMI4";
  // console.log(m.split('=')[1])

  return (
    <div className="text-white">

      {data && data.meals.map((meal) => {
        return (
          <div key={meal.idMeal} className="space-y-5">
            <h1>{meal.strMeal}</h1>
            <img className="h-64" src={meal.strMealThumb} alt="" />
            <h2>Category: {meal.strCategory}</h2>
            <h2>Area: {meal.strArea}</h2>
            <h2>Instructions: {meal.strInstructions}</h2>
            <iframe width="420" height="315"
              src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}>
            </iframe>

          </div>
        )
      })}






    </div>
  )
}
