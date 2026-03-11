import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Formik } from "formik"
import * as Yup from "yup"
import { useTranslateMutation } from "../language/languageApi.js"
import { Spinner } from "../../components/ui/spinner.jsx"
import { toast } from "sonner"

const valSchema = Yup.object({
  text: Yup.string().required("Required"),
  source: Yup.string().required("Required"),
  target: Yup.string().required("Required"),


})

export default function Home() {

  const [translate, { isLoading, data }] = useTranslateMutation();

  return (
    <div>
      <Card className="w-full max-w-sm">

        <CardContent>

          <Formik
            initialValues={{
              text: '',
              source: '',
              target: ''

            }}

            onSubmit={async (val) => {

              try {
                await translate(val).unwrap();
                toast.success('Translation Successfull')

              } catch (err) {

                toast.error(err.data)

              }



            }}

            validationSchema={valSchema}

          >

            {({ handleChange, handleSubmit, setFieldValue, errors, touched, values }) => (
              <form
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">




                  <div className="grid gap-2">
                    <Label htmlFor="text">Text</Label>
                    <Input
                      name='text'
                      onChange={handleChange}
                      value={values.text}
                      id="text"
                      type="text"
                      placeholder="m@example.com"

                    />
                    {errors.text && touched.text && <div className="text-red-500">{errors.text}</div>}
                  </div>


                  <Select
                    onValueChange={(e) => {
                      setFieldValue("source", e)
                    }}
                  >
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select a Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>

                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="ne">Nepali</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                    {errors.source && touched.source && <div className="text-red-500">{errors.source}</div>}
                  </Select>


                  <Select
                    onValueChange={(e) => {
                      setFieldValue("target", e)
                    }}
                  >
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select a Target" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>

                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="ne">Nepali</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.target && touched.target && <div className="text-red-500">{errors.target}</div>}



                </div>
                <Button
                  disabled={isLoading}
                  type="submit" className="w-full mt-5">
                  {isLoading ? <Spinner /> : "Translate"}
                </Button>
              </form>

            )}
          </Formik>


        </CardContent>

      </Card>


      {data && <div className="flex justify-center items-center  bg-gray-100 p-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Translation Result
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Original Text</p>
              <p className="font-medium">{data.translations.text}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Translated Text</p>
              <p className="font-medium text-green-600">
                {data.translations.translation}
              </p>
            </div>

            <div className="flex gap-4">
              <div>
                <p className="text-sm text-gray-500">Source</p>
                <p className="font-medium uppercase">
                  {data.translations.source}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Target</p>
                <p className="font-medium uppercase">
                  {data.translations.target}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>}
    </div>
  )
}
