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
     this.outputTask = document.createElement('li');
     this.textTask = document.createElement('p');
     this.textFieldTask = document.createElement('textarea');
     this.taskEditButton = document.createElement('button');
     this.taskDeleteButton = document.createElement('button');

     this.outputTask.classList.add('todo-list__item');
     this.textTask.classList.add('todo-list__item-text', 'js-text');
     this.textFieldTask.classList.add('todo-list__item-textfield');
     this.taskEditButton.classList.add('todo-list__item-button', 'js-button-edit');
     this.taskDeleteButton.classList.add('todo-list__item-button', 'js-button-delete');

     this.textFieldTask.setAttribute('placeholder', 'Введите изменения...');
     this.outputTask.dataset.id = this.id;
     this.taskEditButton.dataset.id = this.id;
     this.taskDeleteButton.dataset.id = this.id;

     this.textTask.append(document.createTextNode(this.text));
     this.taskEditButton.append(document.createTextNode('Изменить'));
     this.taskDeleteButton.append(document.createTextNode('Удалить'));
     this.outputTask.append(this.textTask, this.textFieldTask, this.taskEditButton, this.taskDeleteButton);

     return this.outputTask;
   }
 }
