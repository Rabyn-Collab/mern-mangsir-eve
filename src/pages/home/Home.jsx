import { useSelector } from "react-redux"

export default function Home() {

  const { users } = useSelector((state) => state.userSlice);

  console.log(users);




  return (
    <div>


    </div>
  )
}
