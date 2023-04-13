import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Home} from './components/Home'
import {Create} from './components/Create'
import {Update} from './components/Update'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/create'} element={<Create/>}/>
        <Route path={'/update/:id'} element={<Update/>}/>
      </Routes>
    </Router>
  );
}

export default App;
