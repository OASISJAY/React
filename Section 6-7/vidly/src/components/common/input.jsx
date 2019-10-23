import React from 'react';
const Input = ({ name, lebal, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{lebal}</label>
            <input
                autoFocus
                {...rest}

                name={name}

                id={name}

                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;