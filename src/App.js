import { BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import Form from './Containers/form';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
