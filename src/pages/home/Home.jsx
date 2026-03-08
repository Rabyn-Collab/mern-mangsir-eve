import { useGetBooksQuery } from "../books/bookApi.js"

export default function Home() {

  const { data, isLoading, error } = useGetBooksQuery();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.data}</div>

  console.log(data);
  return (
    <div>Home</div>
  )
}
