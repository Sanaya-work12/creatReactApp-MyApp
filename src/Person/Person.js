import React from 'react';
import classes from './Person.module.css';

const person = (props) => {

    return (
        // replace existing div with Styled div
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children} </p>

            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};
export default person;