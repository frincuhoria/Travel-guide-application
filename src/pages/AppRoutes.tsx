import React from "react"
import { Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { About } from "./About/About"
import { Home } from "./Home/Home"
import { Login } from "./Login/Login"
import { Movie } from "./Movie/Movie"
import { Movies } from "./Movies/Movies"
import { Register } from "./Register/Register"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Movie />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}
