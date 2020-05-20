import React, {Component} from 'react';
import './Person.css';

class Person extends Component{
    render() {
        return (
            <div className="card">
                <h2>Name: {this.props.name}</h2>
                <p>Phone: {this.props.phone}</p>
                <p>Birth: {this.props.dob}</p>
                <p>Gender: {this.props.gender}</p>
            </div>
        )
    }
}

export default Person;