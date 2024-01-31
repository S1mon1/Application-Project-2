import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Register from './components/Register'
import Offers from './pages/Offers'
import Offer from './pages/Offer'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Offers/>}/>
          <Route path="/offers/:id" element={<Offer/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
