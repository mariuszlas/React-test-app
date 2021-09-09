import React, { useState } from 'react';

function Form({ handleFormSubmit }) {

    return(
        <>
        <form onSubmit={e => handleFormSubmit(e)}>
            <label htmlFor="username">Enter your username: </label>
            <input type="text" name="username" />
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}

export default Form;
