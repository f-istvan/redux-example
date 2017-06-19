import * as actions from './todoActions';
import * as Utils from './Utils';

const initState:any = [];

export const todos = (state = initState, action:any) => {
    switch (action.type) {
    case actions.ADD_TODO:
        let text = action.text.trim();
        if (Utils.isValidInput(state, text)) {
            return [...state, text];
        } else {
            return state;
        }
    case actions.REMOVE_TODO:
        return state
            .filter((e:string) => e !== action.text);
    default:
        return state;
   }
};
