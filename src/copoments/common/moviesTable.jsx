import React, {Component}from 'react';
import Table from './Table';

class MoviesTable extends Component {
  columns = [
    {path:"id",label:"No"},
    {path:"name",label:"Name"},
    {path:"genre",label:"Genre"},
    {path:"rating",label:"Rating"},
    {path:"year",label:"Year"},
    {key:"delete",content:movie=>(
    <button onClick={()=>this.props.onDelete(movie)} className="btn btn-danger">Delete</button>)}
  ]

  render() { 

    const {movies,onSort,sortColumn} = this.props;
    // console.log('SortColumns in moviesTable',sortColumn);
    return ( 
      <Table data={movies} onSort={onSort} sortColumn={sortColumn} columns={this.columns}/>
    
    );

  }
}
 
// export default MoviesTable;

// const MoviesTable = (props) => {

// }
 
export default MoviesTable;