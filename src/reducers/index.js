import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions'

const initialmoviestate = {
    list: [],
    favourites: [],
    showFavourites:false
}

export function movies(state = initialmoviestate, action) {
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

const initialsearchstate={
    result:{}
}

export function search (state=initialsearchstate,action){
    return state;
}

const initialrootstate={
    movies:initialmoviestate,
    search:initialsearchstate
}

export default function rootReducer(state=initialrootstate,action){
    return{
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}