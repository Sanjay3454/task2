
import { Route, Routes } from 'react-router';
import './App.css';
import Register from './components/Register';
import Login1 from './components/Login1';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Register/>} />
    <Route path='login' element={<Login1/>} />
    </Routes>
      
    </div>
  );
}

export default App;
