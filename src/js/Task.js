import {generateId} from './utils.js';
import TaskList from './TaskList.js';

export default class Task {
  constructor(data) {
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
     this.taskEditButton = document.createElement('button');
     this.taskDeleteButton = document.createElement('button');
     const textTask = document.createElement('p');
     const textFieldTask = document.createElement('textarea');

     this.outputTask.classList.add('todo-list__item');
     textTask.classList.add('todo-list__item-text');
     textFieldTask.classList.add('todo-list__item-textfield');
     this.taskEditButton.classList.add('todo-list__item-button');
     this.taskDeleteButton.classList.add('todo-list__item-button');

     textFieldTask.setAttribute('placeholder', 'Введите изменения...');
     this.outputTask.dataset.id = this.id;
     this.taskEditButton.dataset.id = this.id;
     this.taskDeleteButton.dataset.id = this.id;

     textTask.append(document.createTextNode(this.text));
     this.taskEditButton.append(document.createTextNode('Изменить'));
     this.taskDeleteButton.append(document.createTextNode('Удалить'));
     this.outputTask.append(textTask, textFieldTask, this.taskEditButton, this.taskDeleteButton);

     return this.outputTask;
   }
 }
