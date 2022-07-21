import './App.css';
import MainLayout from './components/MainLayout';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import  './assets/css/style.css'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainLayout><Home/></MainLayout>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
    </Routes>
  );
}

export default App;
