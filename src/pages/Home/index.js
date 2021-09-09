import React, { useState } from 'react';
import { Greeting, Form, Card, Background } from '../../components';
import './style.css';

function Home() {

    const [username, setUsername] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        setUsername(e.target.username.value);
    }

    return(
        <>
            <Greeting />
            <p>This is a Home page</p>
            <Form handleFormSubmit={handleFormSubmit} />
            <Card username={username}/>
        </>
    )
}

export default Home;
