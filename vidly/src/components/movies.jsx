import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listgroup';
import { getGenres } from '../services/fakeGenreService';
class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        num: 0
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres(), num: getMovies().length });
    }

    hander(id) {
        deleteMovie(id);
        this.setState({ movies: getMovies(), num: getMovies().length, })
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    }
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        const movies = paginate(allMovies, currentPage, pageSize);
        return (this.state.num === 0 ? <div><h5 className="card-title">There are no movies in the database.</h5></div> :
            <div className="row">
                <div className="col-2">
                    <ListGroup items={this.state.genres} />
                </div>
                <div className="col">
                    <h5 className="card-title">Showing {this.state.num} movies in the database.</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col" />
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie =>
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Like onClick={() => this.handleLike(movie)} liked={movie.liked} /></td>
                                    <td><button onClick={() => this.hander(movie._id)} type="button" className="btn btn-danger m-1">Delete</button></td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>

            </div>
        );
    }
}

export default Movies;