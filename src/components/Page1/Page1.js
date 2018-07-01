import React, { Component } from 'react';

class Page1 extends Component {
    render() {
        return (
            <div>
                <p>How are you feeling today?</p>
                <input onChange={this.handleChange} />
            </div>
        );
    }
}

export default Page1;