export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (text:string) => {
    return {
        type: ADD_NOTE,
        text
    }
};

