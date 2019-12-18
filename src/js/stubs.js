import {generateId} from './utils.js'
export const tasks = [
  {
    text: "Инициализация проекта",
    id: generateId(),
    done: false,
    editing: false
  },
  {
    text: "Вывод существующих задач",
    id: generateId(),
    done: false,
    editing: false
  },
  {
    text: "Добавление задачи",
    id: generateId(),
    done: false,
    editing: false
  },
  {
    text: "Редактирование",
    id: generateId(),
    done: false,
    editing: false
  },
  {
    text: "Удаление",
    id: generateId(),
    done: false,
    editing: false
  },
  {
    text: "Фиксирование статуса задачи (выполнено/не выполнено)",
    id: generateId(),
    done: false,
    editing: false
  },
  {
    text: "Перемещение по списку кнопками",
    id: generateId(),
    done: false,
    editing: false
  }
];
