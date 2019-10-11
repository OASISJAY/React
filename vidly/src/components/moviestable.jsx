import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableheader';
import TableBody from './common/tablebody';


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
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
        return (<table className="table">
            <TableHeader
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort} />
            <TableBody
                data={movies}
                columns={this.columns}
            />

        </table>);
    }
}

export default MoviesTable;
