import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Edit() {

    const dispatch = useDispatch();
    const { username } = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "UPDATE REPOS",
            payload: {
                username: username,
                repos: parseInt(e.target.repos.value)
            }
            }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="repos">Edit your repos: </label>
            <input type="text" name="repos" />
            <input type="submit" />
        </form>
    )
}

export default Edit;
