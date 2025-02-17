import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home } from './Pages/Home'
import { PostDetails } from './Pages/PostDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/:id" element={<PostDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
