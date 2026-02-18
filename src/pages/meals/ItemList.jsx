import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { baseUrl } from "../../lib/constants.js";

export default function ItemList() {

  const { label } = useParams();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();



  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(`${baseUrl}/filter.php`, {
        params: {
          c: label
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





  return (
    <div className="grid grid-cols-4 text-white gap-5">

      {data && data.meals.map((meal) => {
        return (
          <div key={meal.idMeal} className="flex flex-col justify-center items-center">
            <img src={meal.strMealThumb} alt="" />
            <h1>{meal.strMeal}</h1>
          </div>
        )
      })}




    </div>
  )
}
