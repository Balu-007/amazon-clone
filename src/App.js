import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    // Will run only once when the component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is', authUser);
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login />}/>
            
          <Route path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>}>
          </Route>

          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>}>
          </Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
