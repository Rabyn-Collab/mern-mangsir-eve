

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router";
import { useApi } from "../../hooks/apiHook.js";



export default function MealCategoryList() {

  const [data, load, err] = useApi('categories.php');

  const nav = useNavigate();




  if (load) {
    return <h1>Loading...</h1>
  }
  if (err) {
    return <h1 className="text-red-700">{err}</h1>
  }




  return (
    <div className="grid grid-cols-4 gap-5">

      {data && data.categories.map((item) => {
        return <Card
          key={item.idCategory}
          className="relative  w-full  pt-0">
          <div className="absolute inset-0 z-30 aspect-video " />
          <img
            src={item.strCategoryThumb}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover "
          />
          <CardHeader>

            <CardTitle>{item.strCategory}</CardTitle>
            <CardDescription className="line-clamp-3">
              {item.strCategoryDescription}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              onClick={() => nav(`/items-list/${item.strCategory}`)}
              className="w-full">View Event</Button>
          </CardFooter>
        </Card>
      })}





    </div>
  )
}



