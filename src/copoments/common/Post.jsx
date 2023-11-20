import React, { Component } from 'react';
import axois from 'axios';
import http from '../service/httpService'

const apiEndpoint  =  "https://jsonplaceholder.typicode.com/posts";


// const apiEndpoint = config.apiEndpoint;

// const Posts = ({match,location})=>{
//     // const result  = queryString.parse(location.search);
//     // console.log('Location',location);
//     useEffect(async () => {
//         const promise  = axois.get('https://jsonplaceholder.typicode.com/posts');
//     const response = await  promise;
//     console.log("Json Get ",response);
//     },[])
//     return(
//         <div>
//             <h1>Posts</h1>
//             <p>Year :</p>
//         </div>
//     )
// }

class Posts extends Component{
    state ={
        data:[]
    }

    async componentDidMount(){
    const {data}  = await http.get(apiEndpoint);
    // console.log(data);
    this.setState({data})
  }

  handleAdd=async()=>{
    const obj = {title:'Demo Post Request  Sucess',body:'b'}
    const {data:post}= await http.post(apiEndpoint,obj);
    // console.log(post)
    const posts = [post,...this.state.data];
    this.setState({data:posts});
  }

  handleUpdate =async post =>{
    post.title ="Updated "+post.id;
    const {data}=await http.put(apiEndpoint+'/'+post.id,post);
    // console.log('UpdateData',data);
    const posts = [...this.state.data]
    const index = posts.indexOf(post)
    post[index] ={...post}
    this.setState({data:posts});


  }
  handleDelete = async post=>{
    const orginalPosts = this.state.data;
    const posts = this.state.data.filter(p=> p.id !=post.id);
    this.setState({data:posts});
    try{
    await http.delete(apiEndpoint+'/'+post.id)
    // throw new Error(" Error Occured!")
    } catch(ex){
        if (ex.response && ex.response.status ===404)
        {alert('This post has already been deleted.')}
        else{
            // alert("An unexpected error occured.");
        }
        // alert("Error Occured!")
        this.setState({data:orginalPosts})
    }
    
  }



    render()
    {
        return (
            <div>
                <button onClick={()=>this.handleAdd()} className="btn btn-primary">Add</button>
                <h1>Title</h1>
                {/* {this.state.data.map((item)=>(
                    <p key={item.id}>{item.title}</p>
                ))} */}
                <table className='table'>
                    <thead>
                        <th  scope="col">
                        No
                        </th>
                        <th  scope="col">
                            Title
                        </th>
                        <th  scope="col">
                            Update
                        </th>
                        <th  scope="col">
                            Delete
                        </th>
                    </thead>
                    <tbody>
                    {this.state.data.map((item) =>(
            
                        <tr  key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td >{item.title}</td>
                        <td><button onClick={()=>this.handleUpdate(item)} className="btn btn-primary">Update</button></td>
                        <td><button onClick={()=>this.handleDelete(item)} className="btn btn-danger">Delete</button></td>
                        </tr>))}

                    </tbody>
                </table>

            </div>
            
        )
    }
}

export default  Posts;



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