import { useState, useEffect} from 'react';
import Login from "./pages/login/Login";
import Ticket from "./pages/tickets/Ticket";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import jsonDATA from './assets/json/users'


function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
      fetchUsers()
    },[])

    const fetchUsers = async () => {
      setUsers(jsonDATA);
    }

  return (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login users={users}/>}/>
        <Route path="/ticket" element={<Ticket users={users}/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
