import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Aboutus from './pages/AboutUs/Aboutus'
import Contactus from './pages/ContactUs/Contactus'
import Login from './pages/Login/Login'
import Register from './pages/Signup/Signup'
import NewsletterSignup from './pages/Newsletter/Newsletter'
import Blog from './pages/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/Contact" element={<Contactus />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Newsletter" element={<NewsletterSignup />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
