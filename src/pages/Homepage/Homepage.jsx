import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
// import styles from './Homepage.css'
import './Homepage.css'
class Homepage extends Component {
    state = { searchTerm : "",
    res : [] ,
    clicked:0,
    movieInfo:{}
    }

    addFav = async (movie) =>{

        const response = await fetch('http://www.omdbapi.com/?apikey=b793ec6e&plot=short&i='+movie.imdbID)
        const responsejson = await response.json();

        const res = await fetch("/api/addfav",{
            method: 'PATCH',
            headers: {'Content-type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                title:responsejson.Title,
                poster:responsejson.Poster
            })

        })

        const content = await res.json();
        console.log(content.watchlist)
        // this.props.setWatchlist(content.watchlist)

        alert('Movie added to watchlist !')

    }
    change = (e) =>{
        this.setState({searchTerm: e.target.value,res: [],clicked:0,movieInfo:{}})
    }

    click = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://www.omdbapi.com/?apikey=b793ec6e&plot=short&s='+this.state.searchTerm)
        
        const responsejson = await response.json();
        if(responsejson.Search !== undefined){
            this.setState({searchTerm: this.state.searchTerm,res : responsejson.Search,clicked:0,movieInfo:{}})
        }
    }

    getMovieInfo = async (movie) =>{

        const response = await fetch('http://www.omdbapi.com/?apikey=b793ec6e&plot=short&i='+movie.imdbID)
        const responsejson = await response.json();

        this.setState({searchTerm: this.state.searchTerm,res : this.state.res,clicked:!this.state.clicked,movieInfo:responsejson})
        console.log(this.state.movieInfo)
    }

    closePopUp = () =>{
        this.setState({searchTerm: this.state.searchTerm,res : this.state.res,clicked:!this.state.clicked,movieInfo:this.state.movieInfo})
    }


    render() { 
        console.log('hiiii');
        return ( 
            <>  
                <div className="content-container">
                    <div className="content">
                        <h1>Cine-Mate</h1>
                        <h2>Hello, {this.props.name} ! Search what you like below .</h2>      
                        <Searchbar click ={this.click} change = {this.change}></Searchbar>
                        <div className="result-container">
                        {
                            this.state.res.map((movie,index)=>{
                                return(
                                <div className="movie" key ={index}>
                                   <div className="heart-icon">
                                        <i className="fas fa-heart" onClick={()=>{this.addFav(movie);}}></i>
                                    </div>
                                    <div className="poster-wrapper" onClick= {()=>{this.getMovieInfo(movie)}} >
                                        <img className = "poster-1" src = {movie.Poster} alt=""></img>
                                    </div>
                                    <div className="title">
                                        {movie.Title} ({movie.Year})
                                        
                                    </div>
                                </div>)
                        
                        })
                        }
                        </div>
                        <div className={this.state.clicked?"modal active":"modal"} id = "modal" >
                            <div className="modal-header" >
                                <div className="title">
                                    {this.state.movieInfo.Title} ({this.state.movieInfo.Year})
                                </div>
                                {/* <button className="close-button" onClick={this.closePopUp}>&times;</button> */}
                                <div className="close-button">
                                    <i className="fas fa-times" onClick={this.closePopUp}></i>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="poster" >
                                {/* style = {{backgroundImage : `url(${this.state.movieInfo.Poster})`,backgroundSize : "cover"}} */}
                                    <img  className ="poster-2"src = {this.state.movieInfo.Poster} alt=""></img> 
                                </div>
                                <div className="info">
                                    <p><label className = "label">Title :</label> {this.state.movieInfo.Title} ({this.state.movieInfo.Year})</p>
                                    <p><label className = "label">Released :</label> {this.state.movieInfo.Released}</p>
                                    <p><label className = "label">Rated :</label> {this.state.movieInfo.Rated}</p>
                                    <p><label className = "label">Runtime :</label> {this.state.movieInfo.Runtime}</p>
                                    <p><label className = "label">Genre :</label> {this.state.movieInfo.Genre}</p>
                                    <p><label className = "label">Language :</label> {this.state.movieInfo.Released}</p>
                                    <p><label className = "label">Actors :</label> {this.state.movieInfo.Actors}</p>
                                    <p><label className = "label">Director :</label> {this.state.movieInfo.Director}</p>
                                    <p><label className = "label">Writers :</label> {this.state.movieInfo.Writer}</p>
                                    <p><label className = "label">IMDB Rating :</label> {this.state.movieInfo.imdbRating}</p>
                                </div>
                                <div className="plot"><label className = "label">Plot :</label> {this.state.movieInfo.Plot}</div>
                            </div>
                        </div>
                        <div className={this.state.clicked?"overlay overlay-active":"overlay"}></div>

                    </div>
                </div>
            </>
         );
    }
}
 
export default Homepage;