export default class TodoSubscriber {

    constructor(private store:any) { }

    private currentValue:string[] = [];
    private previousValue:string[] = [];

    public handleTodoAction = () => {
        this.previousValue = this.currentValue;
        this.currentValue = (<any>this.store).getState().todos;

        if (this.currentValue.length > this.previousValue.length) {
            let newElement = this.arrayDiff(this.currentValue, this.previousValue);
           this.addItem(newElement[0]);
        } else if (this.currentValue.length < this.previousValue.length) {
            let elementToRemove = this.arrayDiff(this.previousValue, this.currentValue);
            this.removeElement(elementToRemove[0]);
        }
    }

    addItem = (elemText:string) => {
        var aTag = document.createElement('a');
        var textNode = document.createTextNode(elemText);
        aTag.appendChild(textNode);
        aTag.setAttribute('href','#');
        aTag.setAttribute('onclick','removeTodo(this.innerHTML)');
        var liTag = document.createElement('li');
        liTag.appendChild(aTag);
       (<HTMLDivElement>document.getElementById("todoList")).appendChild(liTag);
    };

    removeElement = (inputText:string) => {
        let todoList = (<any>document.getElementById("todoList"));
        let liElems:any[] = todoList.children;
        for (let i = 0; i < liElems.length; i++) {
            let liElem = liElems[i];
            if (liElem.firstChild.innerHTML === inputText) {
                todoList.removeChild(liElem);
            }
        }
    }

    arrayDiff = function(arr1:string[], arr2:string[]) {
        return arr1.filter((e:any) => {
            return arr2.indexOf(e) < 0;
        });
    };
}
