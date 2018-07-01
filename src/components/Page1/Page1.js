import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxToProps = reduxStore => ({
    reduxStore
});

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

export default connect(mapReduxToProps) (Page1);