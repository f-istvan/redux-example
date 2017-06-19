import { createStore } from 'redux/';
import { todoApp } from './reducers';
import * as todoActions from './todoActions';
import * as noteActions from './noteActions';

import TodoSubscriber from './TodoSubscriber';
import TodoViewRenderer from './TodoViewRenderer';

import NoteSubscriber from './NoteSubscriber';
import NoteViewRenderer from './NoteViewRenderer';

let store = createStore(todoApp);

(<any>window).addTodo = function () {
    let todoText = (<HTMLInputElement> document.getElementById('todoText')).value;
    store.dispatch(todoActions.addTodo(todoText));
    console.log(store.getState());
};

(<any>window).removeTodo = function (todoText:string) {
    store.dispatch(todoActions.removeTodo(todoText));
    console.log(store.getState());
};

let todoSubscriber = new TodoSubscriber(store, new TodoViewRenderer());
store.subscribe(todoSubscriber.handleTodoAction);

(<any>window).addNote = function () {
    let noteText = (<HTMLInputElement> document.getElementById('noteText')).value;
    store.dispatch(noteActions.addNote(noteText));
    console.log(store.getState());
};

let noteSubscriber = new NoteSubscriber(store, new NoteViewRenderer());
store.subscribe(noteSubscriber.handleNoteAction);

