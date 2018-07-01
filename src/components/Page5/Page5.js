import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

const mapReduxToProps = reduxStore => ({
    reduxStore
});

class Page5 extends Component {

    constructor () {
        super(); 
        this.state = {
            toPage1: false
        }
    }


    sendFeedbackToServer = () => {

        const feedback = {
            q1: this.props.reduxStore.feedbackReducer,
            q2: this.props.reduxStore.feedbackReducer, 
            q3: this.props.reduxStore.feedbackReducer, 
            q4: this.props.reduxStore.feedbackReducer,
        }
        console.log('in sendFeedbackToServer', feedback)
        axios.post('/api/feedback', feedback).then((response) => {
            console.log('response from server', response)
        })
        .catch((error) => {
            console.log(error);
            alert('Error! Call your local dev team!')
        });  
    }


    handleClick = () => {
        this.sendFeedbackToServer(); 
        (this.setState({toPage1: true}));
    }


    render() {
        if(this.state.toPage1 === true) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <div>
                    <h2>Thank You!</h2>
                        <button onClick={this.handleClick}>
                            Leave New Feedback
                        </button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxToProps)(Page5);