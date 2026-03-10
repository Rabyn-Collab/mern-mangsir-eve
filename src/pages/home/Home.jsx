import { EditIcon } from "lucide-react";
import { Button } from "../../components/ui/button.jsx";
import { Card, CardContent, CardHeader } from "../../components/ui/card.jsx";
import { useGetBooksQuery } from "../books/bookApi.js"
import RemoveBook from "../../components/RemoveBook.jsx";
import { useNavigate } from "react-router";

export default function Home() {
  const nav = useNavigate();
  const { data, isLoading, error } = useGetBooksQuery();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.data}</div>


  return (
    <div className=" p-5">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />

            <CardHeader className="text-lg font-semibold leading-snug">
              {item.title}
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {item.detail}
              </p>

              <div className="mt-4 text-xs text-gray-500">
                Author: {item.author}
              </div>
            </CardContent>

            <div className="flex gap-5 justify-end pr-5">
              <Button
                onClick={() => nav(`/form/update/${item.id}`)}
              >
                <EditIcon />
              </Button>

              <RemoveBook id={item.id} />


            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
