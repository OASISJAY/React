import React, { Component } from 'react';
// 
import _ from 'lodash';
import { Link, Route } from 'react-router-dom';
import MovieDetial from '../moviedetial';
//input
//movies:array
//
//
//
class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) {
            return column.content(item)
        };
        console.log(column.path);
        return column.path === 'title' ? <React.Fragment><Link to="/moviedetial" >{_.get(item, column.path)}</Link><Route path="/moviedetial" render={() => <MovieDetial id='123' />} /></React.Fragment> : _.get(item, column.path);
    }
    createKey = (item, column) => {
        return item._id + (column.path || column.key)
    }
    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
                {data.map(item =>
                    <tr key={item._id}>
                        {columns.map(column =>
                            <td key={this.createKey(item, column)}>
                                {this.renderCell(item, column)}
                            </td>
                        )}
                    </tr>
                )}
            </tbody>);
    }
}

export default TableBody;