const initState = [{username: "jonsnow", repos: 12, location: "London"}];

const reducer = (state=initState, action) => {
    switch(action.type) {
        case "CREATE":
            const newUser = action.payload;
            return [...state, newUser]
        case 'UPDATE REPOS':
            return state.map(user =>
            	user.username === action.payload.username
            		? { ...user, repos: action.payload.repos }
            		: user);
        case "DELETE":
            return state.filter(user => user.username !== action.payload.username);
        default:
            return state;
    }
}

export default reducer;
