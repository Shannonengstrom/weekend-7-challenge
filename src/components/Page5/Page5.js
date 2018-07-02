import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

// other way of writing mapReduxToProps: 
// const mapReduxToProps = (reduxStore) => { 
    //return {
        // reduxStore : reduxStore
   // }
//}


class Page5 extends Component {

    constructor () {
        super(); 
        this.state = {
            toPage1: false
        }
    }

    componentDidMount() {
        this.sendFeedbackToServer();
      }

    sendFeedbackToServer = () => {
        // set variable for data to send
        const feedback = this.props.reduxStore.feedbackReducer
        console.log('in sendFeedbackToServer', feedback)
        // axios call and send data to url
        // an axios call returns a promise - .then
        axios.post('/api/feedback', feedback)
        // .then is only here because of the axios.post
        .then((response) => {
            this.refreshData();
            console.log('response from server', response)
        }).catch((error) => {
            console.log(error);
            alert('Error! Call your local dev team!')
        });  
    }

    handleClick = () => {
        (this.setState({toPage1: true}));
    }

    refreshData() {
        const action = {type: 'RESET', payload: ''};
        this.props.dispatch(action);
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