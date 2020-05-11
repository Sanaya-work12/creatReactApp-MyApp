import React from 'react';
import classes from './Cockpit.module.css';
const cockpit = (props) => {

    let btnClass = '';
    const assignedClasses = [];

    if(props.showperson) {
        btnClass = classes.Red;        
    }


    if (props.personlength <= 2) {
      assignedClasses.push('red');
    }
    if (props.personlength <= 1) {
      assignedClasses.push('bold');
    } 

    return (<div className={classes.Cockpit}>
        <h1>
          {props.title}
        </h1>
        <p className={assignedClasses.join(' ')}>
          This is really working!
        </p>
        <button className={btnClass} onClick={props.clicked}>Switch Name</button>
    </div>);
}

export default cockpit;