import React from 'react';
// interface
// Input: liked:Boolean
// Output: onClick 
const Like = props => {
    return (
        <i
            onClick={props.onClick}
            style={{ cursor: 'pointer' }}
            className={!props.liked ? "fa fa-heart-o" : "fa fa-heart"}
            aria-hidden="true"
        >
        </i >
    );
}

export default Like;