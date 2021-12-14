import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import User from './components/User';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/profile" element={<User/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
