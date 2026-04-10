import { Formik } from "formik";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";

export default function SearchProduct({ setSearchParams }) {
  return (

    <div>

      <Formik
        initialValues={{
          search: ''
        }}

        onSubmit={(val) => {
          if (val.search.length > 0) {
            setSearchParams({ search: val.search });
          }
        }}

      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <form onSubmit={handleSubmit}>

            <div className="flex gap-5 mb-6">



              <Input
                name="search"
                value={values.search}
                onChange={handleChange}
                className="w-md"
                placeholder="Search Product"
              />

              <Button type="submit">Search</Button>



            </div>

          </form>
        )}
      </Formik>

    </div>
  )
}