import { useNavigate, useParams } from "react-router"
import { useApi } from "../../hooks/apiHook.js";
export default function ItemList() {




  const { label } = useParams();
  const nav = useNavigate();

  const [data, load, err] = useApi('filter.php', { c: label });




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
          <div
            onClick={() => nav(`/meal/${meal.idMeal}`)}
            key={meal.idMeal} className="flex flex-col justify-center items-center cursor-pointer">
            <img src={meal.strMealThumb} alt="" />
            <h1>{meal.strMeal}</h1>
          </div>
        )
      })}




    </div>
  )
}
