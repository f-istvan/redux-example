export default class NoteViewRenderer {

    addItem = (elemText:string) => {
        var divTag = document.createElement('div');
        divTag.innerHTML = elemText;
       (<HTMLDivElement>document.getElementById("noteList")).appendChild(divTag);
    };
}
