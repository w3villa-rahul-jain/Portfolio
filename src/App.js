import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1>My Portfolio</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
