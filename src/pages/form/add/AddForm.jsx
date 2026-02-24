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
export default function AddForm() {
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
              email: ''
            }}
            onSubmit={(val) => {

              console.log(val);

            }}

          >


            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => {
              return <form
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">
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
                  </div>

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
