import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
    }

    handle() {
        this.props.handle(this.props.val);
    }

    render() {
        return (
            <button type="button" id={this.props.id}  onClick={this.handle}> {this.props.val} </button>
        );
    }
}

export default Button;