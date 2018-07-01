import React, { Component } from 'react';
import axios from 'axios';

class AdminInfo extends Component {




    render() {
        return (
                <tr>
                    <td>{this.props.feedback.q1}</td>
                    <td>{this.props.feedback.q2}</td>
                    <td>{this.props.feedback.q3}</td>
                    <td>{this.props.feedback.q4}</td>
                    <td><button onClick={() => this.props.delete(this.props.feedback.id)}>Delete</button></td>
                </tr>
        );
    }
}

export default AdminInfo;