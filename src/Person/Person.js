import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const person = (props) => {

    const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    padding: 16px;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media (min-width: 500px) {
        width: '450px'
    }`;

    return (
        // replace existing div with Styled div
        <StyledDiv>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children} </p>

            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};
export default person;