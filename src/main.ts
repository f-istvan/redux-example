import { createStore } from 'redux/';
import { todoApp } from './reducers';
import * as todoActions from './todoActions';
import TodoSubscriber from './TodoSubscriber';

let store = createStore(todoApp);

(<any>window).addTodo = function () {
    let todoText = (<HTMLInputElement> document.getElementById('todoText')).value;
    //console.log(store.getState());
    store.dispatch(todoActions.addTodo(todoText));
    //console.log(store.getState());
};

(<any>window).removeTodo = function (todoText:string) {
    //console.log(store.getState());
    store.dispatch(todoActions.removeTodo(todoText));
    //console.log(store.getState());
};


let todoSubscriber = new TodoSubscriber(store);
store.subscribe(todoSubscriber.handleTodoAction);
