import { createBrowserRouter,RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmp from './components/CreateEmp'
import ListOfEmps from './components/ListofEmps'
import Employee from './components/Employee'
import EditEmp from './components/EditEmp'

function App() {
  const routerObj=createBrowserRouter([
        {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                path:"",element:<Home/>
            },
            {
                path:"createemp",element:<CreateEmp/>
            },
            {
                path:"list",element:<ListofEmps/>
            },
            {path:"employee",element:<Employee/>},
            {path:"edit-emp",element:<EditEmp/>}
        ]
    }])
  return (
    <RouterProvider router={routerObj}/>
  )
}


export default App
