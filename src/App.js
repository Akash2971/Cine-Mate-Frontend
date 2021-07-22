import './App.css';
import { useState,useEffect } from 'react';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'
import Watchlist from './pages/Watchlist/Watchlist';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  const [name,setName] = useState('');
  // const [watchlist,setWatchlist] = useState([]);
  useEffect(()=>{
    (
      async () =>{
        const response = await fetch('/api/user',{
          headers: {'Content-type':'application/json'},
          credentials: 'include'
        });

        const content = await response.json();
        if(content.name !== undefined){
          setName(content.name);
        }
      }
    )();
  });
  

  return (
    <Router>
      <Navbar name = {name} setName = {setName}></Navbar>
      <div className="App">
        
        <Switch>
          <Route path="/home" exact component = {()=><Homepage name = {name} ></Homepage>} />
          <Route path="/about" exact component = {()=><About></About>} />
          <Route path="/contact" exact component = {()=><Contact></Contact>} />
          <Route path="/" exact component = {()=><Login name = {name} setName = {setName}></Login>} />
          <Route path="/register" exact component = {()=><Register></Register>} />
          <Route path ="/watchlist" exact component = {()=><Watchlist></Watchlist>} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
