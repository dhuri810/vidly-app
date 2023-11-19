import logo from './logo.svg';
import './App.css';
import Navbar from './copoments/navbar/navbar';
import Counters from './copoments/counter/counters';
import { Component } from 'react'
import Movies from './copoments/movies/movies';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';

// import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './copoments/dashboard';


class App extends Component{

  render()
  {
    return(
    <div>
        <Navbar totalCounters={12}/>
        <main className='container'>
      {/* <Counters/> */}
            {/* <Movies/> */}
      
        </main>
        <div className='content'>
          {/* <Switch> */}
            <Routes path='/dashboard' element={<Dashboard/>}/>
            <Routes path='/movies' exact element={<Movies/>}/>

            {/* <Routes path='/dashboard' render={()=><Dashboard sortby="newset"/>}/> */}
          {/* </Switch> */}
          
        </div>
        
   
    </div>

    );
  }
}

export default App;
