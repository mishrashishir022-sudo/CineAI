import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
const Body = ()=>{
    const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  }
])
    return(
        <>
        <RouterProvider router={appRouter}/>
        </>
    )
}
export default Body;