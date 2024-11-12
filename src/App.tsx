import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Masala from './assets/pages/Masala';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/masala' element={<Masala></Masala>}></Route>
      </Routes>
    </div>
  );
}

export default App;
