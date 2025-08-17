import './index.css'
import './App.css'
import Template from './components/Template'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
    </Routes>
  )
}

export default App
