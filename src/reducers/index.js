import {ADD_MOVIES} from '../actions'

const initialmoviestate={
    list:[],
    favourites:[]
}

export default function movies(state=initialmoviestate,action){
    if(action.type===ADD_MOVIES){
        return {...state,list:action.movies}
    }
    return state;
}