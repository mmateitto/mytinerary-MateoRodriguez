import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import CityLayout from "./layouts/CityLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/city",
    element: <CityLayout />
  }
])

function App() {
  return (
    <>
    <div>
      <RouterProvider router={router}/>
    </div>
    </>
  ) 
}
export default App;