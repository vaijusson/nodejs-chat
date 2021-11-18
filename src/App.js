import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {UserContext} from './UserContext';
import React, {useEffect, useState} from 'react';
import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

function App() {
  const [user,setUser] = useState(null);
  useEffect(() => {
    const verifyUser = async () => {    
      try 
      {  
        const res = await fetch('http://localhost:5000/verifyuser', {
        credentials: 'include', 
        headers:{'Content-Type':'application/json'}
        });
        const data = await res.json();
        console.log('user:',data);
        setUser(data);
      }
      catch (err) 
      {
        console.log(err);
      }
    }
    verifyUser();    
  },[]);

  return (
    <Router>
    <div className="App">
     <UserContext.Provider value={{user,setUser}}>
     <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route exact path="/chat/:room_id/:room_name" component={Chat} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
     </UserContext.Provider>
    </div>
    </Router>
  );
}

export default App;
