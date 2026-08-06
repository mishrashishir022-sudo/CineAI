
import ReactDOM  from 'react-dom/client'
import './Index.css'
import Header from './Components/Header.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Body from './Components/Body.jsx'

const Main= ()=>{
  return(
    <>
    <Body/>
    </>
  )
}


const insert = ReactDOM.createRoot(document.querySelector('#root'))
insert.render(<Main/>)