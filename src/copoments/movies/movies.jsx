import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/pagenate';
import ListGroup from '../common/listGroup';
import MoviesTable from '../common/moviesTable';
import lodash from 'lodash';



class Movies extends Component {    
    state = {  
         movies :  [
            {
                id:1,
                name :"Die Hard",
                genre:"Action",
                rating : 2.5,
                year:"2015"
            },
            {
                id :2,
                name :"Mission Impossible",
                genre:"Action",
                rating : 5,
                year:"2023"
            },
            {
                id : 3,
                name :"Animal",
                genre:"Mystery",
                rating : 5,
                year:"2018"
            },
            {
              id:4,
              name :"Mission Possible",
              genre:"Comedy",
              rating : 2.5,
              year:"2015"
          },
          {
              id :5,
              name :"Detective Pikachu",
              genre:"Comedy",
              rating : 5,
              year:"2023"
          },
          {
              id : 6,
              name :"Padmavat",
              genre :"Historical",
              rating : 5,
              year:"2018"
          },
          {
            
            id:7,
            name :"Dhammal",
            genre:"Comedy",
            rating : 2.5,
            year:"2015"
        },
        {
            id :8,
            name :"Kidiahci 2",
            genre:"Comedy",
            rating : 5,
            year:"2023"
        },
        {
            id : 9,
            name :"Transformers",
            genre:"Action",
            rating : 5,
            year:"2018"
        },
        ],
        currentPage : 1,
        pageSize:4 ,
        genre: [],
        selectedGenre:'All Genres',
        sortColumn:{path:'title',order:'asc'}
    } 
    componentDidMount(){
      const genres = [{genre:'All Genres'},...this.state.movies]
      // console.log(genres)
      this.setState({genre:[...new Set(genres.map(item => item.genre))]})
    }
    
    handlePageChange= page =>{
      // console.log(page)
      this.setState({currentPage :page}) 
    }

    handleDelete = movie =>{
      const moviespart1 = this.state.movies.filter(m=> m.id !== movie.id);
      this.setState({movies:moviespart1})
    };

    handleGenreSelect= genre=>{
        this.setState({selectedGenre:genre,currentPage:1})
    };

    handleSort=sortColumn=>{
      // console.log("Inside sortColumn movies",sortColumn)
      this.setState({sortColumn})
    }

    render() { 
      const {length:count} = this.state.movies;
      const filtered = this.state.selectedGenre!=="All Genres"? this.state.movies.filter(m=>m.genre===this.state.selectedGenre):this.state.movies;
      const sorted = lodash.orderBy(filtered,[this.state.sortColumn.path],
        [this.state.sortColumn.order]);
      const moviepg  = paginate(sorted,this.state.currentPage,this.state.pageSize);
     

      if (count ===0)
      return <p>There are no movies in the database!</p>
        

        return (
          
            <div className='row'>
              <div className="col-2">
                <ListGroup selectedItem={this.state.selectedGenre}items={this.state.genre} onItemSelect={this.handleGenreSelect}/>
              </div>
              <div className="col">
                  
              <p>Showing {filtered.length} movies in the database</p>
              {console.log('sortColumn',this.state.sortColumn)}
              <MoviesTable
              
              sortColumn={this.state.sortColumn} 
              onSort={this.handleSort}
              movies={moviepg} onDelete={this.handleDelete}/>        
            
            <Pagination itemsCount={filtered.length} currentPage= {this.state.currentPage} onPageChange ={this.handlePageChange} pageSize={this.state.pageSize}/>





            </div>


            </div>
        );
    }
}
 
export default Movies;