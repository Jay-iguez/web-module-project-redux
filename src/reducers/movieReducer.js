import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            const newMovie = {
                id: state.movies.filter(movie => movie.id === state.movies.length).length === 0 ? state.movies.length : state.movies.length + 1
                ,
                title: action.payload.title,
                director: action.payload.director,
                metascore: action.payload.metascore,
                genre: action.payload.genre,
                description: action.payload.description
            }
            return {
                ...state,
                movies: [...state.movies, newMovie]
            }
        default:
            return state;
    }
}

export default reducer;