
import './App.css';
import Create from './Create';
import ShowAll from './ShowAll';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav className='d-flex flex-row justify-content-around'>
        <li>
        <Link to={'/'}> Show All</Link>
        </li>
        <li>
        <Link to={'/create'}>Create</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<ShowAll/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
