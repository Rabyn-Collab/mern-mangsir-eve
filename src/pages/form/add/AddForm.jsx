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
import { Textarea } from "../../../components/ui/textarea.jsx"
import * as Yup from "yup";
import { useNavigate } from "react-router"
import { useAddBookMutation } from "../../books/bookApi.js"
import { Spinner } from "../../../components/ui/spinner.jsx"
import { toast } from "sonner"



export const valSchema = Yup.object({
  title: Yup.string().required("Required"),
  detail: Yup.string().required("Required"),
  image: Yup.string().url().required("Required"),
  author: Yup.string().required("Required"),

});


export default function AddForm() {

  const [addBook, { isLoading }] = useAddBookMutation();

  const nav = useNavigate();


  return (
    <div>


      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add Book</CardTitle>
          <CardDescription>
            Enter  details
          </CardDescription>

        </CardHeader>
        <CardContent>




          <Formik
            initialValues={{
              title: "",
              detail: "",
              image: "",
              author: "",

            }}
            onSubmit={async (val) => {
              try {
                await addBook(val).unwrap();
                toast.success("Book added");
                nav(-1);
              } catch (err) {
                toast.error(err.data);

              }

            }}

            validationSchema={valSchema}

          >


            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => {
              return <form
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>

                    <Input
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      id="title"
                      type="text"
                      placeholder="Title"

                    />
                    {errors.title && touched.title && <p className="text-red-500">{errors.title}</p>}
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>

                    <Input
                      name='author'
                      value={values.author}
                      onChange={handleChange}
                      id="author"
                      type="text"
                      placeholder="John Doe"

                    />
                    {errors.author && touched.author && <p className="text-red-500">{errors.author}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="image">Image Url</Label>

                    <Input
                      name='image'
                      value={values.image}
                      onChange={handleChange}
                      id="image"
                      type="url"
                      placeholder="https://example.com/image.jpg"

                    />
                    {errors.image && touched.image && <p className="text-red-500">{errors.image}</p>}
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








                </div>
                <Button
                  disabled={isLoading}
                  type="submit" className="w-full mt-5">
                  {isLoading ? <Spinner /> : "Add Book"}
                </Button>
              </form>
            }}




          </Formik>




        </CardContent>

      </Card>



    </div>
  )
}
