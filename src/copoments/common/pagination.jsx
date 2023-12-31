import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

const Pagination = (props)=>{

    const{itemsCount,pageSize,onPageChange,currentPage} = props
    const pagesCount = Math.ceil(itemsCount/pageSize)
    const pages = lodash.range(1,pagesCount+1)
    // console.log(currentPage);
    return(
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    {pages.map(page=>(
        <li key={page} className={page===currentPage?"page-item active":'active-item'}>
            <a onClick={()=>onPageChange(page)} className="page-link" >{page}</a>
        </li>
    ))}
    
  </ul>
</nav>
    )
}

Pagination.propTypes ={
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired

}

export default Pagination;