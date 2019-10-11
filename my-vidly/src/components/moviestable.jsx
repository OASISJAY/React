import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';


class MoviesTable extends Component {
    columns = [
        { path: 'title', lebal: 'Title' },
        { path: 'genre.name', lebal: 'Genre' },
        { path: 'numberInStock', lebal: 'Stock' },
        { path: 'dailyRentalRate', lebal: 'Rate' },
        { key: 'like', content: item => <Like onClick={() => this.props.onLike(item)} liked={item.liked} /> },
        { key: 'delete', content: item => <button onClick={() => this.props.onDelete(item)} type="button" className="btn btn-danger btn-sm">Delete</button> },

    ]
    render() {
        const { movies, sortColumn, onSort } = this.props;
        return (<Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} className="" />);
    }
}

export default MoviesTable;
