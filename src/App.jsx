import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound.jsx";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./features/home/Home.jsx";


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
          path: '*',
          element: <NotFound />

        }


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
