import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./layout/Root"
import Users from "./page/Users"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"/",
          element:<Users/>
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
