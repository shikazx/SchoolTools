import Navbar from './Navbar';
import Merge from './Merge'
import Calculator from './Calculator';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

      <div>
        <Navbar />
        <div className = "content">

      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

        </div>

      </div>

      

  );
}

export default App
