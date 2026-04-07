import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"
import * as Yup from "yup"
import { toast } from "sonner"
import { Spinner } from "../../components/ui/spinner.jsx"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { useGetUserQuery, useUpdateUserMutation } from "./userApi.js"


const registerSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

});

export default function UserProfile() {
  const { user } = useSelector(state => state.userSlice);
  const { isLoading, error, data } = useGetUserQuery(user.token);
  const nav = useNavigate();

  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();


  if (isLoading) return <Spinner />
  if (error) return <h1>{error?.data?.message}</h1>



  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Update your account</CardTitle>
        <CardDescription>
          Enter your deatil below to update to your account
        </CardDescription>

      </CardHeader>
      <CardContent>

        <Formik
          initialValues={{
            username: data.username,
            email: data.email,

          }}
          onSubmit={async (val) => {
            try {
              await updateUser({
                body: val,
                token: user.token
              }).unwrap();
              toast.success('updated successful');
              nav(-1);
            } catch (err) {
              toast.error(err.data.message)

            }

          }}

          validationSchema={registerSchema}


        >

          {({ handleChange, handleSubmit, values, touched, errors }) => (

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">


                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    onChange={handleChange}
                    value={values.username}
                    name='username'
                    id="username"
                    type="text"
                    placeholder="John Doe"

                  />
                  {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={handleChange}
                    value={values.email}
                    name='email'
                    id="email"
                    type="email"
                    placeholder="m@example.com"

                  />
                  {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                </div>





                <Button
                  disabled={isUpdating}
                  type="submit" className="w-full">
                  {isUpdating ? <Spinner /> : "Update"}
                </Button>
              </div>
            </form>

          )}
        </Formik>

      </CardContent>

    </Card >
  )
}
