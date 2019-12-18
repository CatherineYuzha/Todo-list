import {generateId} from './utils.js';

export default class Task {
  constructor(data) {
    this.title = data.title;
    this.text = data.text ;
    this.id = data.id || generateId();
    this.editing = data.editing || false;
    this.done = data.done || false;
   }

   setDone(isDone) {
     this.done = isDone;
   }

   get data() {
     const {text, id, editing, done} = this;

     return {text, id, editing, done};
   }

   get template() {
     let outputTask = document.createElement('li');
     let textTask = document.createElement("p");
     let textFieldTask = document.createElement("textarea");
     let taskEditButton = document.createElement("button");
     let taskDeleteButton = document.createElement("button");

     outputTask.classList.add("todo-list__item");
     textTask.classList.add("todo-list__item-text", "js-text");
     textFieldTask.classList.add("todo-list__item-textfield");
     taskEditButton.classList.add("todo-list__item-button", "js-button-edit");
     taskDeleteButton.classList.add("todo-list__item-button", "js-button-delete");

     textFieldTask.setAttribute('placeholder','Введите изменения...');
     outputTask.dataset.id = this.id;
     taskEditButton.dataset.id = this.id;
     taskDeleteButton.dataset.id = this.id;

     textTask.append(document.createTextNode(this.text));
     taskEditButton.append(document.createTextNode("Изменить"));
     taskDeleteButton.append(document.createTextNode("Удалить"));
     outputTask.append(textTask, textFieldTask,taskEditButton, taskDeleteButton);

     return outputTask;
   }

 }
