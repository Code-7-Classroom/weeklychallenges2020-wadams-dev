import React, {Component} from 'react';
import './App.css';
import Person from './Person';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons:[
      { 
      name: 'Tom Brady',
      phone: '704-234-9865',
      dob:'August 03, 1977',
      gender:'Male'},
      { 
      name: 'Cam Newton',
      phone: '704-345-9021',
      dob:'May 11, 1989',
      gender:'Male'},
      { 
      name: 'Brett Favre',
      phone: '704-456-4325',
      dob:'October 10, 1969',
      gender:'Male'},
      { 
      name: 'Donovan McNabb',
      phone: '704-567-6208',
      dob:'November 25, 1976',
      gender:'Male'},
      {
      name: 'Michael Vick',
      phone: '704-675-5555',
      dob: 'June 26, 1980',
      gender: 'Male'},
      ]
    };
  }
  render(){
    const person = this.state.persons;
    return(
      <div className="App">
          {person.map(el => <Person name={el.name} phone={el.phone}  dob={el.dob} gender={el.gender} /> )}
      </div>
    )
  }
}

export default App;
