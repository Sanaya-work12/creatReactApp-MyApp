import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.impstate ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.impstate ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>
          My React Application.
        </h1>
        <p className={classes.join(' ')}>
          This is really working!
        </p>
        <StyledButton impstate={this.state.showPerson} onClick={this.togglePersonHandler}>Switch Name</StyledButton>
        {person}
      </div>
    );
  }
}

export default App;
