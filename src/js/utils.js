// TODO: функцию надо экспортировать, иначе никто ее не сможет использовать !!!!!!!!!!!!!
export function generateId() {
  return `${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .substr(2)}`;
}
