import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminInfo from './AdminInfo';

class AdminPage extends Component {

    constructor() {
        super(); 
        this.state = {
            feedback: []
        }
    }


    getFeedbackFromServer() {
        axios.get('/api/feedback').then((response) => {
            console.log('in admin GET');
            this.setState({
                feedback: response.data
            })
        })
    }


    componentDidMount(){
       this.getFeedbackFromServer();
    }

    deleteFromServer = (id) => {
        axios.delete(`/api/feedback/${id}`)
        .then((response) => {
            this.refreshData(); 
        }).catch((error) => {
            console.log(error);
            alert('something went wrong!'); 
        })
    }
    
    refreshData() {
        axios.get('/api/feedback').then((response) => {
            console.log('in admin GET');
            this.setState({
                feedback: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map((feedback, id) => 
                        <AdminInfo feedback={feedback} key={id} delete={this.deleteFromServer} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminPage;