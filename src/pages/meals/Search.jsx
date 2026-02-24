import { useNavigate, useSearchParams } from "react-router"
import { useApi } from "../../hooks/apiHook.js";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const nav = useNavigate();



  const [data, load, err] = useApi('search.php', {
    s: searchParams.get('s')
  });



  if (load) return <h1>Loading....</h1>
  if (err) return <h1 className="text-red-700">{err.data}</h1>


  return (
    <div className="text-white grid grid-cols-4 gap-4">


      {data?.meals === null ? <h1>No Meals Found</h1> :

        data?.meals.map((meal) => {
          return (
            <div
              onClick={() => nav(`/meal/${meal.idMeal}`)}
              key={meal.idMeal} className="space-y-5 cursor-pointer">
              <h1>{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt="" />
              <h2>Category: {meal.strCategory}</h2>

            </div>
          )
        })


      }




    </div>
  )
}
