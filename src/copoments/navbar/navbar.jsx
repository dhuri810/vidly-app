import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";



const Navbar = ({totalCounters})=>{
  // const {} =  this.props
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <span className="navbar-brand mb-0 ">{totalCounters}</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li style={{margin: '0 12px 0 0',color:'black'}} className="nav-item ">
        <NavLink to="/movies">Movies</NavLink>
        </li>

        <li style={{margin: '0 12px 0 0'}} >
        <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        
        <li style={{margin: '0 12px 0 0'}}>
        <NavLink to="/product">Product</NavLink>
        </li>
        
        <li style={{margin: '0 12px 0 0'}}>
        <NavLink to="/post">Post</NavLink>
        </li>
        
        <li style={{margin: '0 12px 0 0'}}>
        <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </div>
  </nav>


);
}


// class Navbar extends Component {    
//     state = {};
//     render() { 
//       return (<nav class="navbar navbar-light bg-light">
//       <div class="container-fluid">
//         <span class="navbar-brand mb-0 h1">Navbar</span>
//       </div>
//     </nav>);
//     }
// }
 
export default Navbar;