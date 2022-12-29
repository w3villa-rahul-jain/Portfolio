import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import MainSection from './Section/MainSection';

function App() {

  
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar/>
        <MainSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
