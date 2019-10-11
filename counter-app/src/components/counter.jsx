import React, { Component } from 'react';
class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data form the server

        }
    }
    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    render() {
        console.log('Counter - Rendered');

        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => this.props.onIncrement(this.props.counter)}
                    >
                        +
                </button>
                    <button
                        className="btn btn-secondary btn-sm m-2"
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                    >
                        -
                </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>


            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 btn btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    }
}
export default Counter;