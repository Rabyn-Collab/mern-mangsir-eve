import { useGetQoutesQuery } from "../quotes/quotesApi.js"

export default function Home() {

  const { isLoading, data, error } = useGetQoutesQuery();

  if (isLoading) return 'Loading...';
  if (error) return 'Error';

  console.log(data);
  return (
    <div>Home</div>
  )
}
