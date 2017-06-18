import { combineReducers } from 'redux';

let initState = {
    todos: [],
    notes: []
};

let todos = (state = initState, action:any) => {
    return initState;
}

let notes = (state = initState, action:any) => {
    return initState;
}

export const todoApp = combineReducers({
    todos,
    notes
});
