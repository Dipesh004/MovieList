import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
      console.log(this.props.store.getState())
    })
    store.dispatch(addMovies(data));
    console.log('STATE', store.getState());
  }

  render() {
    const{movies,search}=this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    console.log('render')
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => { this.onChangeTab(false) }} >Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => { this.onChangeTab(true) }} >Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isfavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className='no-movies'>No Movies To Display</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
