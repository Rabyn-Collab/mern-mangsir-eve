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
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useRegisterMutation } from "./authApi.js"
import { useNavigate } from "react-router"


const registerSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Register() {
  const [show, setShow] = useState(false);
  const [registerUser, { isLoading }] = useRegisterMutation();
  const nav = useNavigate();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register your account</CardTitle>
        <CardDescription>
          Enter your deatil below to register to your account
        </CardDescription>

      </CardHeader>
      <CardContent>

        <Formik
          initialValues={{
            username: '',
            email: "",
            password: ''
          }}
          onSubmit={async (val) => {
            try {
              await registerUser(val).unwrap();
              toast.success('Registration successful');
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



                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <div className="relative">
                    <Input
                      onChange={handleChange}
                      value={values.password}
                      name='password'
                      type={show ? "text" : "password"}
                      placeholder="password"
                      id="password" />

                    <Button

                      type='button'
                      variant='ghost'
                      size='icon'
                      onClick={() => setShow(!show)}
                      className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                    >
                      {show ? <EyeIcon /> : <EyeOffIcon />}

                    </Button>


                  </div>

                  {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <Button
                  disabled={isLoading}
                  type="submit" className="w-full">
                  {isLoading ? <Spinner /> : "Register"}
                </Button>
              </div>
            </form>

          )}
        </Formik>

      </CardContent>

    </Card>
  )
}
