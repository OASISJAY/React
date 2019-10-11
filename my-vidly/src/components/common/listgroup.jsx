import React from 'react';
const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onItermSelect }) => {
    return (
        <ul className="list-group">
            {items.map(item => <li
                onClick={() => onItermSelect(item)}
                key={item[valueProperty]}
                className={item === selectedItem ? "list-group-item active" : "list-group-item"}> {item[textProperty]}
            </li>)
            }
        </ul >);
}
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
export default ListGroup;