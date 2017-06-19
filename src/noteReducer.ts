import * as actions from './noteActions';
import * as Utils from './Utils';

const initState:any = [];

export const notes = (state = initState, action:any) => {
    switch (action.type) {
    case actions.ADD_NOTE:
        let text = action.text.trim();
        if (Utils.isValidInput(state, text)) {
            return [...state, text];
        } else {
            return state;
        }
    default:
        return state;
    }
};
