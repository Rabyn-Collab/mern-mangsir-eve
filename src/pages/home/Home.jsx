import { useGetProductsQuery } from "../../local/products/productApi.js"

export default function Home() {

  const { isLoading, error, data } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.data}</div>

  console.log(data);

  return (
    <div>Home</div>
  )
}
