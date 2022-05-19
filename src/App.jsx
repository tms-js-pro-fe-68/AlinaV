import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/homePage/HomePage'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}>
        </Route>
        <Route path='/' element={<HomePage/>} exact/>
      </Routes>
    </Router>
  )
}
