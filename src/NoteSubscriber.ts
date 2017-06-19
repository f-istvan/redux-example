import NoteViewRenderer from './NoteViewRenderer';
import * as Utils from './Utils';

export default class NoteSubscriber {

    constructor(
        private store:any,
        private viewRenderer:NoteViewRenderer
    ) {}

    private currentValue:string[] = [];
    private previousValue:string[] = [];

    public handleNoteAction = () => {
        this.previousValue = this.currentValue;
        this.currentValue = (<any>this.store).getState().notes;

        if (this.currentValue.length > this.previousValue.length) {
            let newElement = Utils.arrayDiff(this.currentValue, this.previousValue);
            this.viewRenderer.addItem(newElement[0]);
        }
    }

}
