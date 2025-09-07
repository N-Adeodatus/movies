import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Movies from "../components/Movies"
import About from "../components/About"
import Favorites from "../components/Favorites"
import MovieDetails from "../components/MovieDetails"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element ={<MovieDetails />} />"
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  )
}