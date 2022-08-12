import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions'

const initialmoviestate = {
    list: [],
    favourites: [],
    val:false
}

export default function movies(state = initialmoviestate, action) {
    // if(action.type===ADD_MOVIES){
    //     return {...state,list:action.movies}
    // }
    switch (action.type) {
        case ADD_MOVIES:
            return ({ ...state, list: action.movies });
        case ADD_TO_FAVOURITES:
            return ({ ...state, favourites: [action.movie, ...state.favourites] });
        case REMOVE_FROM_FAVOURITES:
            const filteredarray = state.favourites.filter(movie =>
                movie.Title !== action.movie.Title)
            return ({ ...state, favourites: filteredarray });
        case SET_SHOW_FAVOURITES:
            return ({ ...state, showFavourites:action.val });
        default:
            return state;
    }

}
