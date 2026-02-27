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
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group.jsx"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../components/ui/select.jsx"
import { Textarea } from "../../../components/ui/textarea.jsx"
import * as Yup from "yup";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setUser } from "./userSlice.js"
import { nanoid } from "@reduxjs/toolkit"


const valSchema = Yup.object({
  username: Yup.string().min(4).max(20).required('username is required'),
  email: Yup.string().email().required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  detail: Yup.string().min(10).max(500).required(),
  // image: Yup
  //   .mixed()
  //   .test("fileSize", "The file is too large", (value) => value && value.size <= 2 * 1024 * 1024)
  //   .test('fileType', 'Unsupported file type', (val) => {
  //     return val && ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type);
  //   })
  //   .required()

});


export default function AddForm() {

  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>


      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add Some</CardTitle>
          <CardDescription>
            Enter your details
          </CardDescription>

        </CardHeader>
        <CardContent>




          <Formik
            initialValues={{
              username: '',
              email: '',
              gender: '',
              country: '',
              detail: '',
              // image: '',
              // imageReview: ''
            }}
            onSubmit={(val, { resetForm }) => {
              dispatch(setUser({
                ...val,
                id: nanoid()
              }));
              nav(-1);



            }}

            validationSchema={valSchema}

          >


            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => {
              return <form
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>

                    <Input
                      name='username'
                      value={values.username}
                      onChange={handleChange}
                      id="username"
                      type="text"
                      placeholder="John Doe"

                    />
                    {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>

                    <Input
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      type="email"
                      placeholder="m@example.com"

                    />
                    {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <h4>Select Your Gender</h4>

                    <RadioGroup
                      onValueChange={(val) => {
                        setFieldValue('gender', val);
                      }}
                      defaultValue="comfortable" className="w-fit mt-3">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="male" id="r1" />
                        <Label htmlFor="r1">Male</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="female" id="r2" />
                        <Label htmlFor="r2">Female</Label>
                      </div>

                    </RadioGroup>
                    {errors.gender && touched.gender && <p className="text-red-500">{errors.gender}</p>}



                  </div>

                  <div>
                    <h4>Select Your Country</h4>
                    <Select
                      onValueChange={(val) => {
                        setFieldValue('country', val);
                      }}

                    >
                      <SelectTrigger className="w-full max-w-48 mt-2">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>

                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="china">China</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.country && touched.country && <p className="text-red-500">{errors.country}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="detail">Detail</Label>

                    <Textarea
                      name='detail'
                      value={values.detail}
                      onChange={handleChange}
                      id="detail"
                      type="text"
                      placeholder="details"

                    />
                    {errors.detail && touched.detail && <p className="text-red-500">{errors.detail}</p>}
                  </div>


                  {/* <div className="grid gap-2">
                    <Label htmlFor="image">Select an Image</Label>

                    <Input
                      name='image'
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFieldValue('imageReview', URL.createObjectURL(file));
                        setFieldValue('image', file);
                      }}
                      type="file"
                    />

                    {values.imageReview && !errors.image && <img src={values.imageReview} alt="" className="w-64 h-48" />}
                    {errors.image && touched.image && <p className="text-red-500">{errors.image}</p>}
                  </div> */}





                </div>
                <Button type="submit" className="w-full mt-5">
                  Submit
                </Button>
              </form>
            }}




          </Formik>




        </CardContent>

      </Card>



    </div>
  )
}
