import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class Page4 extends Component {

    constructor () {
        super(); 
        this.state = {
        q4: '', 
        toPage5: false
        }
    }

    sendFeedbackToRedux = () => {
        const body = this.state.q4;
        const action = {type: 'ADD_q4', payload: body};
        this.props.dispatch(action);
        console.log(body);
        
    }

    handleChange = (event) => {
        this.setState({ 
            q4: event.target.value
        });
    }

    handleClick = () => {
        this.sendFeedbackToRedux(); 
        (this.setState({toPage4: true}));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendFeedbackToRedux(this.state); 
        console.log('in handleSubmit', this.state);
    }

    render() {
        if(this.state.toPage4 === true) {
            return <Redirect to='/5'/>
        }
        return (
            <div>
                {/* <pre>{JSON.stringify(this.props.reduxStore.feedbackReducer)}</pre> */}
                {/* <div>{this.props.reduxStore.questionsReducer}</div> */}
                <div>
                    <h2>Any comments you want to leave?</h2>
                <div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input onChange={this.handleChange} 
                                value={this.state.feedback} name="q4"/>
                            </div>
                        </form>
                </div>
                        <button onClick={this.handleClick}>
                            Next
                        </button>
                </div>
            </div>
        );
    }
}

export default connect(mapReduxToProps)(Page4);