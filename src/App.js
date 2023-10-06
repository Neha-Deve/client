
import './App.css';
import AddUser  from './components/AddUser';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <NavBar/>
      <Routes>
     <Route path='/register' element={<RegistrationForm/>}/>
     <Route path='/users' element={<AllUsers/>}/>
     
  
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
