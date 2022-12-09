import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './components/User/User'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
