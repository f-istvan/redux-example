import * as actions from './todoActions';

const initState:any = [];

export const todos = (state = initState, action:any) => {
    switch (action.type) {
    case actions.ADD_TODO:
        return [...state, action.text];
    case actions.REMOVE_TODO:
        return state
            .filter((e:string) => e !== action.text);
    default:
        return initState;
    }
};
