import React from 'react';
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movie = props.movies.find(movie=>movie.id===Number(id));
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {   props.displayFavorites && props.favorites.filter(iteratedMovie => movie.id === iteratedMovie.id).length === 0 ?

                                <span onClick={() => props.addFavorite(movie)} className="m-2 btn btn-dark">Favorite</span>
                                :
                                null
                            }
                            
                            <span className="delete">
                                <input onClick={() => {
                                props.deleteMovie(movie.id)
                                props.removeFavorite(movie.id)
                                push('/movies')
                                }} type="button" className="m-2 btn btn-danger" value="Delete"/>
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}



const mapStateToProps = (state) => {
    return {
        movies: state.componentState.movies,
        displayFavorites: state.componentFavoriteState.displayFavorites,
        favorites: state.componentFavoriteState.favorites
    }
}

export default connect(mapStateToProps, {deleteMovie, addFavorite, removeFavorite})(Movie)