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
import { useNavigate, useParams } from "react-router"
import { Spinner } from "../../../components/ui/spinner.jsx"
import { toast } from "sonner"
import { valSchema } from "../add/AddForm.jsx"
import { useGetBookQuery, useUpdateBookMutation } from "../../books/bookApi.js"





export default function UpdateForm() {

  const { id } = useParams();
  const nav = useNavigate();
  const { isLoading, data, error } = useGetBookQuery(id);
  const [updateBook, { isLoading: updateLoading }] = useUpdateBookMutation();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.data}</div>





  return (
    <div>


      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Edit Book</CardTitle>
          <CardDescription>
            Enter  details
          </CardDescription>

        </CardHeader>
        <CardContent>




          <Formik
            initialValues={{
              title: data.title,
              detail: data.detail,
              image: data.image,
              author: data.author,

            }}
            onSubmit={async (val) => {

              try {
                await updateBook({ id, data: val }).unwrap();
                toast.success("Book updated successfully");
                nav(-1);
              } catch (err) {
                toast.error(err.data);
              }


            }}

            validationSchema={valSchema}

          >


            {({ handleChange, handleSubmit, values, errors, touched }) => {
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
                  disabled={updateLoading}
                  type="submit" className="w-full mt-5">
                  {updateLoading ? <Spinner /> : "Update Book"}
                </Button>
              </form>
            }}




          </Formik>




        </CardContent>

      </Card>



    </div>
  )
}
