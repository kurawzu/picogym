import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Plans from './components/pages/Plans'
import Programs from './components/pages/Programs'
import { Route, Routes} from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar />
      <Routes>
	      <Route path='/' element={<Home />} />
	      <Route path='/about' element={<About />} />
	      <Route path='/plans' element={<Plans />} />
        <Route path='/programs' element={<Programs />} />
	

      </Routes>
    
    </>
  )
}

export default App
