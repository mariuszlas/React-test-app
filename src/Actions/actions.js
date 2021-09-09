const addUser = (e) => {

    e.preventDefault();
    const data = {
        type: 'CREATE',
        payload: {
            username: e.target.username.value,
            repos: e.target.repos.value,
            location: e.target.location.value,
        }
    }

    // e.target.reset();
return data;
}

export default addUser;
