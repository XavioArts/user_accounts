import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import User from './components/User';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/profile" element={<User/>}/>
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
