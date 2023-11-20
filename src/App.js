import logo from './logo.svg';
import './App.css';
import Navbar from './copoments/navbar/navbar';
import { Component } from 'react'
import {  Routes, Route,Navigate} from 'react-router-dom';
import Dashboard from './copoments/dashboard';
import Movies from './copoments/movies/movies';
import ProductDetials from './copoments/common/Productdetails';
import Product from './copoments/common/Product';
import Posts from './copoments/common/Post';
import NotFound from './copoments/common/NotFound';
import AdminDashboard from './copoments/admin/admin';
import AdminPost from './copoments/admin/adminpost';
import AdminUsers from './copoments/admin/adminusers';
// import { Redirect } from 'react-router-dom';
// import axois from 'axios';

class App extends Component{


  // async componentDidMount(){
  //   const {data}  = await axois.get('https://jsonplaceholder.typicode.com/posts');
  //   // const response =   promise;
  //   // console.log("Json Get ",response);
  // }

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
        <Routes>            
  {/*Add a question mark to the id  parameter path='/products/:id?' to make the parameter optional  */}        
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/products/:id' element={<ProductDetials/>}/>
          <Route path='/movies' exact element={<Movies/>}/>
          <Route path='/product' exact element={<Product/>}/>
          <Route path='/notfound' exact element={<NotFound/>}/>
          
          <Route path='/notfound' exact element={<NotFound/>}/>
          <Route path='/admin/' exact element={<AdminDashboard/>}/>
          <Route path='/admin/posts' exact element={<AdminPost/>}/>
          <Route path='/admin/users' exact element={<AdminUsers/>}/>
          <Route path='/post/:year?/:month?' exact element={<Posts/>}/>
          {/* <Redirect to='/not-found' element={<NotFound/>}/> */}
          <Route path="*" element={<Navigate to="/notfound" replace />}/>
        </Routes>

          
        </div>
        
   
    </div>

    );
  }
}

export default App;
