import './App.css'
import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreatePost from './pages/CreatePost.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import SignUp from './pages/signUp.jsx'
import Login from './pages/LogIn.jsx' 
import NavBar from './components/NavBar.jsx' 



function App() {
  

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  fetch("https://blog-app-0p3z.onrender.com/api/blogs")
    .then(res => res.json())
    .then(data => {
      console.log("BLOGS FROM BACKEND:", data);
      setBlogs(data);
    })
    .catch(err => console.error(err));
    }, []);




  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/createpost" element={<CreatePost setBlogs={setBlogs} />} />
          <Route path="/blog/:id" element ={<BlogDetails blogs={blogs} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
