import './App.css';
import MainLayout from './components/MainLayout';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainLayout><Home/></MainLayout>} />
    </Routes>
  );
}

export default App;
