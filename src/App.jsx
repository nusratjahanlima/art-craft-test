import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"


function App() {


  return (
    <div className="app">
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Home/>}/>
       <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
