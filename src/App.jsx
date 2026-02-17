import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import RootLayout from "./components/RootLayout.jsx";


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
