import React from 'react';
import { addToFavourites, removeFromFavourites } from '../actions';

class MovieCard extends React.Component{
    handleUnFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }

    handleFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addToFavourites(movie));
    }
    render(){
        const {movie,isfavourite}=this.props
        return(
            <div className='movie-card' >
                <div className="left">
                    <img src={movie.Poster} alt="" />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {isfavourite
                        ?<button className='unfavourite-btn' onClick={this.handleUnFavouriteClick} >UnFavourite</button>
                        :<button className='favourite-btn' onClick={this.handleFavouriteClick} >favourite</button>}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;