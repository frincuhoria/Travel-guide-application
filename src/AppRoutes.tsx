import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./pages/About/About"
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Home } from "./pages/Home/Home"
import { Trip } from "./components/Trip/Trip";
import { Products } from "./pages/Products/Products";
import { Register } from "./pages/Register/Register";
import { Footer } from "./components/Footer/Footer";

export const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:uuid" element={<Trip />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </Router>
  )
}
