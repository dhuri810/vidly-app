import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({totalCounters})=>{
  // const {} =  this.props
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <span className="navbar-brand mb-0 ">{totalCounters}</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <Link to="/dashboard">Dashboard</Link>
        
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