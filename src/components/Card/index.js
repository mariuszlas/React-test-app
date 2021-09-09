import React, { useState, useEffect } from 'react';

function Card({ username }) {

    const [data, setData] = useState([ {name: 'No data'} ]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function getData() {
            setStatus('Loading...');
            try {
                // const res = await fetch(`https://api.github.com/users/${username}/repos`)
                // const repos = await res.json();
                let repos = [{name: 'first'}, {name: 'second'}]
                console.log(repos);
                setData(repos);
                repos instanceof Array ? setStatus('') : setStatus(repos.message)
            } catch (err) {
                setStatus('Could not fetch the data, check your username');
            }
        }
        getData();
    }, [username])

    if (status === '') {
        return(
            <p>Status is an empty string</p>
        )
    } else {
        return(
            <>
            <p>Username in Card: {username}</p>
            </>
        )
    }
}

export default Card;
