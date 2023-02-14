import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Vues/Home'
import User from './Vues/User'
import Details from "./Vues/Details";
import Basket from "./Vues/Basket"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/User" element={<User />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
