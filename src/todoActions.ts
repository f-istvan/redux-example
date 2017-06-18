export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text:string) => {
    return {
        type: ADD_TODO,
        text
    }
};

export const removeTodo = (text:string) => {
    return {
        type: REMOVE_TODO,
        text
    }
}
