import React, { Component } from 'react';
import Like from '../common/like';


class Counter extends Component {    
    // state = {  
    //      value : this.props.counter.value
    // } 

  //   handleIncrement = ()=> {
  //   this.setState({value :  this.state.value +1 })
  // };

    
    render() { 
      return (
      <div >
        {this.props.children}
        <div className ='p-2'>
        <span className='m-3'>{this.props.counter.value}</span>
        {/* <button  onClick={this.handleIncrement} className="btn btn-primary btn-sm p-l-2">Increment</button> */}
        <button  onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm p-l-2">+</button>
        <button  onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-primary btn-sm p-l-2 m-2" disabled={this.props.counter.value === 0 ? 'disabled':""}>-</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        <Like/>

        </div>
      </div>);
     
    }
}
 
export default Counter;