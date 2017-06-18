import { combineReducers } from 'redux';

import * as todoReducer from './todoReducer';
import * as noteReducer from './noteReducer';

export const todoApp = combineReducers({
    todos: todoReducer.todos,
    notes: noteReducer.notes
});

