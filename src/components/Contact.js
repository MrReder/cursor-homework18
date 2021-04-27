import React from 'react';
import "./style.css";
import mars from './img/mars.svg';
import female from './img/female.svg';
import intersex from './img/intersex.svg';



const Contact = ({ gender, firstName, lastName, phone }) => {

    let genderIcon;

    if (gender === 'male') {
        genderIcon = mars;
    } else if (gender === 'female') {
        genderIcon = female;
    } else {
        genderIcon = intersex;
    }
    return (
        <div className="single-contact">
            <img className="gender-img" src={genderIcon} style={{ width: 15, height: 15 }}></img>
            <p className="gender-text">{gender}</p>
            <p className="first-name">{firstName}</p>
            <p className="last-name">{lastName}</p>
            <p>{phone}</p>
        </div>
    )
}




export default Contact;