import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element='Esse é o texto mostrando em Route.' />
      </Routes>
    </Router>
  );
}

export default App;
