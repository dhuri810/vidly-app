import React, { Component } from 'react';
import {  useNavigate } from 'react-router-dom';

class ProductDetials extends Component{


  state={
    productId:''
  }
  componentDidMount() {
    
    const pathname = window.location.pathname;
    const productId = pathname.split('/').pop();
    this.setState({productId});
    
  }
  handleSave=()=>{
    alert("Successfully saved!");
    // this.props.history.replace("/products");
}


  render(){
    
    return(
          <div>
            <h1>Hello from Product Detials</h1>
            <p>You are viewing the product id : {this.state.productId}</p>
            <button onClick={this.handleSave}>Save</button>
          </div>

    )
  }
}



export default ProductDetials;