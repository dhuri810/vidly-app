// import { couch } from 'fontawesome';
import React, { Component } from 'react';



class TableHeader extends Component {
    state = {  } 

    raiseSort= path =>{
        const sortColumn={...this.props.sortColumn};
          if(sortColumn.path===path)
          sortColumn.order=sortColumn.order ==="asc"?"desc":"asc";
          else{
            sortColumn.path = path;
            sortColumn.order ="asc";
          }
          this.props.onSort(sortColumn);
      }

      renderSortIcon = column=>{
        
        const {sortColumn} = this.props;
        if (column['path']!==this.props.sortColumn.path) return null;
        if(sortColumn.order==='asc'){
            return<span>  asc</span>
         }
         return<span>  desc</span>
        // return <i className='fa fa-sort-desc'/>

      }
    



    render() { 
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column=>(
                    <th className='clickable' 
                    onClick={()=>this.raiseSort(column.path)} key={column.path||column.label}>
                        {column.label}{this.renderSortIcon(column)}
                    </th>))}
                    
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;