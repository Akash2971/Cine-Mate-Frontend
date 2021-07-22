import React, { Component } from 'react';
import './Watchlist.css'
class Watchlist extends Component {
    state = {
        watchlist:[]
     }

     async componentDidMount(){
         const response = await fetch('/api/user',{
           headers: {'Content-type':'application/json'},
           credentials: 'include'
         });
 
         const content = await response.json();
         this.setState({watchlist :content.watchlist})
 
     }

    removeFav = async (movie) =>{

        const response = await fetch("/api/removefav",{
            method: 'PATCH',
            headers: {'Content-type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                title:movie.title,
                poster:movie.poster
            })
        })

        const content = await response.json();
        this.setState({watchlist:content.watchlist})

    }
    

    render() { 
        
        return ( 
            <div className="watch-container">
                <h1>Watch List</h1>
                <div className="watch-list">
                {   
                    this.state.watchlist.map((movie,index)=>{
                                return(
                                <div className="watchlist-movie" key={index}>
                                    <div className="watch-heart-icon">
                                        <i className="fas fa-heart-broken" onClick={()=>{this.removeFav(movie)}}></i>
                                    </div>
                                    <div className="watch-poster-wrapper">
                                        <img className = "watch-poster" src = {movie.poster} alt=""></img>
                                    </div>
                                    <div className="watch-title">
                                        {movie.title}                
                                    </div>
                                </div>)
                        
                        })
                }
                </div>
            </div>
         );
    }
}
 
export default Watchlist;