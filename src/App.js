import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Login />} ></Route>
      <Route path='/register' element={<Registration />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
