import React from 'react';
import { useDispatch } from 'react-redux';
import addUser from '../../Actions/actions.js';
import { useHistory } from 'react-router-dom';

function Contact() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(addUser(e))
        history.push("/about")
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Enter your username: </label>
            <input type="text" name="username" />
            <label htmlFor="repos">Enter numer of repos: </label>
            <input type="text" name="repos" />
            <label htmlFor="location">Enter your location: </label>
            <input type="text" name="location" />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Contact;
