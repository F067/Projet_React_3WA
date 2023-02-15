import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Vues/Home'
import User from './Vues/User'
import Basket from "./Vues/Basket"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "./store/userSlice";

function App() {

  const dispatch = useDispatch()

  // recuperation du local storage au demarage de l'app
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch(updateProfile(user))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
