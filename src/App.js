import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// import React, { useState } from 'react';

// const App = props => {

//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Shruti', age: 24 },
//       { name: 'Rajat', age: 23 }
//     ]
//   });

//   const switchNameHandler = () => {
//     //console.log('Clicked')
//     // Don't do this: this.state.person[0].name = Sanaya

//     setPersonsState({
//       persons: [
//         { name: 'Sanaya', age: 24 },
//         { name: 'Rajat', age: 25 }
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>
//         My React Application.
//       </h1>
//       <button onClick={ switchNameHandler }>Switch Name</button>
//       <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age } />
//       <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My Hobbies: Racing</Person>

//     </div>
//   );
// }



class App extends Component {

  state = {
    persons: [
      { name: 'Shruti', age: 24 },
      { name: 'Rajat', age: 23 },
      { name: 'Twinkle', age: 10 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked')
    // Don't do this: this.state.person[0].name = Sanaya

    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Rajat', age: 25 },
        { name: 'Nannu', age: 14 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    //console.log('Clicked')
    // Don't do this: this.state.person[0].name = Sanaya

    this.setState({
      persons: [
        { name: 'Shruti', age: 24 },
        { name: event.target.value, age: 25 },
        { name: 'Nannu', age: 14 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesState = this.state.showPerson;

    this.setState({showPerson: !doesState});
  }

  render() {
    //inline styles
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    // eslint-disable-next-line
    {/** Preferred way of outputting Conditional Content */}

    let person = null;

    if( this.state.showPerson ) {
      person = (
        <div>
          { this.state.persons.map(person => {
            return <Person name={ person.name } age={ person.age } />
          }) }
      </div>
      );
    }

    //1. return a dom structure - Use JSX (recommended)
    // Passing props between components
    return (
      <div className="App">
        <h1>
          My React Application.
        </h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        { person }
      </div>
    );

    // 2. treats h1 as text and outputs h1 Hi! I'm a React App!!!
    // React.createElement(element, JavascriptObject, any number of children)
    // return React.createElement('div', null, 'h1', 'Hi! I\'m a React App!!!');
    // Solution - BUT, Tough to Nest
    // return React.createElement('div', {className: 'App'}, React.createElement('h1' , null, 'Hi! I\'m a React App!!!'));

  }
}

export default App;
