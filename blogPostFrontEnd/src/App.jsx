import {Link , Routes , Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Createpost from "./pages/Createpost"
import Createuser from "./pages/Createuser"
import Login from "./pages/Login"
import './App.css'

function App() {
return (
  <>
  <BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to="./">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/createpost">
          CREATE A NEW POST
        </Link>
      </li>
      <li>
        <Link to="/createuser">
          CREATE A USER
        </Link>
      </li>
      <li>
        <Link to="/login">
          LOGIN
        </Link>
      </li>
    </ul>
  </nav>
  <div id="pagesContainer">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/createpost" element={<Createpost/>}></Route>
      <Route path="/createuser" element={<Createuser/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </div>
  <footer>
    
  </footer>
  </BrowserRouter></>    
  )
}

export default App
