import TodoViewRenderer from './TodoViewRenderer';
import * as Utils from './Utils';

export default class TodoSubscriber {

    constructor(
        private store:any,
        private viewRenderer:TodoViewRenderer
    ) { }

    private currentValue:string[] = [];
    private previousValue:string[] = [];

    public handleTodoAction = () => {
        this.previousValue = this.currentValue;
        this.currentValue = (<any>this.store).getState().todos;

        if (this.currentValue.length > this.previousValue.length) {
            let newElement = Utils.arrayDiff(this.currentValue, this.previousValue);
            this.viewRenderer.addItem(newElement[0]);
        } else if (this.currentValue.length < this.previousValue.length) {
            let elementToRemove = Utils.arrayDiff(this.previousValue, this.currentValue);
            this.viewRenderer.removeElement(elementToRemove[0]);
        }
    }
}
