export default class TaskList {
  constructor(data) {
    this.list = data.list || [];

  }



  add(task){
    this.list.push(task);
  }

  delete(i){

  }

  deleteLast(){

  }

  deleteFirst(){

  }

  modify(task, i){

  }
}
