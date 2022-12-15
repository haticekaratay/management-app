import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './components/User/User'
import NavBar from "./components/NavBar"
import Users from './components/User/Users';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/form" element={<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
