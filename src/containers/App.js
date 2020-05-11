import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'as3eee', name: 'Shruti', age: 24 },
      { id: 'as3e', name: 'Rajat', age: 23 },
      { id: 'as3e23', name: 'Twinkle', age: 10 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {

    this.setState({
      persons: [
        { id: 'as3eee', name: newName, age: 24 },
        { id: 'as3e', name: 'Rajat', age: 25 },
        { id: 'as3e23', name: 'Nannu', age: 14 }
      ]
    })
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesState = this.state.showPerson;

    this.setState({ showPerson: !doesState });
  }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let person = null;

    if (this.state.showPerson) {
      person = <Persons persons={this.state.persons} changed={this.nameChangeHandler} clicked={this.deletePersonHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit title={this.props.appTitle} personlength={this.state.personlength} clicked={this.togglePersonHandler} showperson={this.state.showPerson} persons={this.state.persons}/>
        {person}
      </div>
    );
  }
}

export default App;
