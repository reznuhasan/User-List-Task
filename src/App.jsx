import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./layout/Root"
import Users from "./page/Users"
import UserProfile from "./components/UserProfile"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"/",
          element:<Users/>
        },
        {
          path:"user/:id",
          element:<UserProfile/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
