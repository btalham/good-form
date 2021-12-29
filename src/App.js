import { BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import Home from './Containers/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
