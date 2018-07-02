import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminInfo from './AdminInfo';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


// Material UI
// const CustomTableCell = withStyles(theme => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);
  
//   const styles = theme => ({
//     root: {
//       width: '100%',
//       marginTop: theme.spacing.unit * 3,
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 700,
//     },
//     row: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.background.default,
//       },
//     },
//   });
  


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