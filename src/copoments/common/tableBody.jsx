import React, { Component } from 'react';
import lodash from "lodash";
class TableBody extends Component {
    renderCell =(item,column)=>{
        if(column.content) return column.content(item);
        return lodash.get(item,column.path)
    }
    
    render() {
        const {data,columns} = this.props 
        return ( 
            <tbody>
                {data.map((item)=><tr key={item.id}>
                    {columns.map(column=>
                        <td key={item.id+(column.path ||column.key)}>{this.renderCell(item,column)}</td>)}
                </tr>
                )}
            </tbody>
        );
    }
}
 
export default TableBody;