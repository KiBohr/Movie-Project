import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <main className="font-[Raleway] bg-light-blue text-dark-blue p-5">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
