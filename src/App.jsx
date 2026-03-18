import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
const NotFound = lazy(() => import("./pages/not-found/NotFound.jsx"));
import RootLayout from "./components/RootLayout.jsx";
const AddForm = lazy(() => import("./pages/form/AddForm.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));



export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'add-form',
          element: <AddForm />
        },

        {
          path: '*',
          element: <NotFound />

        }


      ]
    },


  ]);

  return <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
}
