import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" id={this.props.id}> {this.props.val} </button>
        );
    }
}

export default Button;