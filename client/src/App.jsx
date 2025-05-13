import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Component/Signup'
import './App.css'
import Login from './Component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard'


function App() {
  

  return (
    <> 
       <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
