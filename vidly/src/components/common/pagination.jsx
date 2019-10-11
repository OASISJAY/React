import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    console.log(currentPage);
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);
    if (pagesCount === 1) return null;
    //[1...pagesCount] lodash library
    //[1,2,3].map()
    return (<nav>
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'} >
                    {/* eslint-disable-next-line */}
                    <a onClick={() => onPageChange(page)} className="page-link">
                        {page}
                    </a>
                </li>
            ))}

        </ul>
    </nav >);
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
//number -> data type
//isRequired -> necessary not null. must be passing.

export default Pagination;
