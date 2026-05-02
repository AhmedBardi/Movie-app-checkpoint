import {Route,Routes} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home";
import Description from './pages/Description';
import BarNav from './components/BarNav';
// import {movies} from './data/moviesData'

function App() {
  return (
    <div>
      <BarNav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movie/:id' element={<Description/>}/>
    </Routes>
    </div>
  )
}

export default App
