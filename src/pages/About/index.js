import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function About() {

    const users = useSelector(state => state)

    const renderUsers = () => users.map(user => (
        <>
            <Link to={`/about/${user.username}`}>{user.username}</Link>
            <span>X</span>
        </>
        ))

    return (
        <>
        <section id="users">
            { renderUsers() }
        </section>

        </>
    )
}

export default About;
