import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify'
import Maps from './pages/maps'
import Home from './pages/Home'

function App() {
  

  return (
    <Router>
      <div>
        <div>
        <div>
         <Routes>
         <Route path='/home' element = { <Home />} />
         <Route path='/login' element = { <Login />} />
         <Route path='/register' element = { <Register />} />
         
         </Routes>
          <ToastContainer />
        </div>
        </div>
        <Maps />
      </div>   
    </Router>
  )
}

export default App
