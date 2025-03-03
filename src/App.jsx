import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
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