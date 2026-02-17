import { Input } from "../../components/ui/input.jsx";
import MealCategoryList from "../meals/MealCategoryList.jsx";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 items-center">
        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />

        <div className="text-white text-center col-span-2 space-y-3">
          <h1>Welcome to TheMealDB</h1>
          <p>Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.
            We offer a free recipe API for anyone wanting to use it, with additional premium features if required.</p>
        </div>

        <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
      </div>

      <div className="flex justify-center mb-9">
        <form className="max-w-2xl">
          <Input
            className="w-96 inline-block bg-white"
            type="text" placeholder="Search" />

        </form>
      </div>
      <MealCategoryList />

    </div>
  )
}
