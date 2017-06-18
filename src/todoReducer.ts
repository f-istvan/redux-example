import * as actions from './todoActions';

const initState:any = [];

export const todos = (state = initState, action:any) => {
    switch (action.type) {
    case actions.ADD_TODO:
        let text = action.text.trim();
        if (text != '' && text != undefined && isUniqueElem(state, text)) {
            return [...state, text];
        } else {
            return state;
        }
    case actions.REMOVE_TODO:
        return state
            .filter((e:string) => e !== action.text);
    default:
        return initState;
    }

    function isUniqueElem(arr:any[], elem:any) {
        return arr.indexOf(elem) < 0;
    }
};
