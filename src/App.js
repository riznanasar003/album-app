import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import Search from './Components/Search';
import Delete from './Components/Delete';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddUser/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/viewAll' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
