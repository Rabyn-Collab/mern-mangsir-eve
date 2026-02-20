import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import RootLayout from "./components/RootLayout.jsx";
import ItemList from "./pages/meals/ItemList.jsx";
import Meal from "./pages/meals/Meal.jsx";
import UseParams from "./pages/params/UseParams.jsx";
import UseSearchParams from "./pages/params/UseSearchParams.jsx";


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
          path: 'items-list/:label',
          element: <ItemList />,
        },

        {
          path: 'meal/:id',
          element: <Meal />

        },

        {
          path: 'use-params/:id',
          element: <UseParams />
        },

        {
          path: 'searchParams',
          element: <UseSearchParams />

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
