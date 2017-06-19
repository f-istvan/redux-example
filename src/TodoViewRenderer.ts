export default class TodoViewRenderer {

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
    };
}
