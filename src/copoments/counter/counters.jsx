import React, { Component } from 'react';
import Counter from './counter';



class Counters extends Component {    
    state = {  
         counters :[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
         ]
    } ;

    
    handleIncrement =(counter)=>{
        // console.log("Increment handled",counter);
        const counters = [...this.state.counters]; // Create a copy of the counters array
        const index = counters.indexOf(counter)
        // console.log("Demo", counters);
        counters[index].value++;
        console.log(counters[index])
        this.setState({counters})
    };

    handleDelete =(counterId)=>{
        const counters = this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters});
    };

    handleDecrement=(counterId)=>{
      const counters = [...this.state.counters]; // Create a copy of the counters array
        const index = counters.indexOf(counterId)
        // console.log("Demo", counters);
        if (parseInt(counters[index].value) !==0){
          counters[index].value--;
          console.log(counters[index])
          this.setState({counters})
        }
    };


    render() { 
      return (<div>
        {this.state.counters.map(counter =>
        // <Counter  key={counter.id}  onDelete={this.handleDelete} value={counter.value} id={counter.id}>
        <Counter  key={counter.id} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter={counter}>
            <h4>Counter Number : {counter.id}</h4>
        </Counter>)}
      </div>
      );
    }
}
 
export default Counters;