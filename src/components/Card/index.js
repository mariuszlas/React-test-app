import React, { useState, useEffect } from 'react';

function Card({ username }) {

    const [data, setData] = useState([ {name: 'No data'} ]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function getData() {
            setStatus('Loading...');

            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`)
                const repos = await res.json();
                setData(repos);
                // if an error is retunred (obj), set status as error message
                repos instanceof Array ? setStatus('') : setStatus(repos.message)
            } catch (err) {
                setStatus('Could not fetch the data, check your username');
            }
        }
        getData();
    }, [username])

    const renderCards = () => data.map(repo => (
            <div class="card">{repo.name}</div>
        ))

    if (status === '') {  // no errors
        return(
            <main>
                <p>Here is the list of your public repos:</p>
                <div id="all-cards">{ renderCards() }</div>
            </main>
        )
    } else {
        return(<p>{status}</p>)
    }
}

export default Card;
