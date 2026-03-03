import { useSelector } from "react-redux"
import { Button } from "../../components/ui/button.jsx";
import { EditIcon } from "lucide-react";
import RemoveUser from "../../components/RemoveUser.jsx";
import { useNavigate } from "react-router";

export default function Home() {

  const { users } = useSelector((state) => state.userSlice);

  const nav = useNavigate();

  // const data = [
  //   {
  //     id: 1,
  //     name: "John Doe",

  //   },
  //   {
  //     id: 2,
  //     name: "JohnJee",
  //   }
  // ];


  // const updatedData = data.map((user) => {
  //   return user.id === 1 ? { id: 1, name: 'Rita jee' } : user;
  // });

  // console.log(updatedData);

  return (
    <div className="grid grid-cols-4 gap-5">

      {users.map((user, index) => {
        return <div key={user.id} className="shadow-lg p-5">
          <h1>{user.username}</h1>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.country}</p>
          <p>{user.detail}</p>

          <div className="mt-3 flex gap-5">
            <Button
              onClick={() => nav(`/form/update/${user.id}`)}
              variant="outline">
              <EditIcon />

            </Button>

            <RemoveUser id={user.id} />


          </div>

        </div>
      })}


    </div>
  )
}
