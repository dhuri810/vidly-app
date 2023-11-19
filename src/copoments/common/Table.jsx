import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';


const Table = (props) => {
    const{columns,sortColumn,onSort,data} = props
    return ( 
    <table className="table">
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody data={data} columns={columns}/>        
    </table>
      );
}
 
export default Table;


{/* <tbody>
          {movies.map((movie,index) =>(
            
            <tr key={movie.id}>
              <th scope="row">{movie.id}</th>
            <td >{movie.name}</td>
            <td >{movie.genre}</td>
            <td >{movie.rating}</td>
            <td >{movie.year}</td>
            <td><button onClick={()=>onDelete(movie)} className="btn btn-danger">Delete</button></td>
            </tr>))}
        
      </tbody> */}