import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            //key is always at the outer element in the map method bcz that is the method we replicate
            return (<ErrorBoundary key={person.id}>
              <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} changed={(event) => this.nameChangeHandler(event, person.id)} />
            </ErrorBoundary>);
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      <div className={classes.App}>
        <h1>
          My React Application.
        </h1>
        <p className={assignedClasses.join(' ')}>
          This is really working!
        </p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;
