import { Todo } from "$lib/Todo.svelte";
import { Filter } from "$lib/Filter";

export class TodoMgr {
  todos: Array<Todo> = $state([]);
  filter: Filter;
  filteredTodos: Array<Todo> = $derived(this.filterTodos(this.todos));
  constructor() {
    this.filter = Filter.ALL;
  }

  private filterTodos(todos: Array<Todo>) {
    switch (this.filter) {
      case Filter.ALL:
        return todos;
      case Filter.CHECKED:
        return todos.filter((todo: Todo) => todo.checked);
      case Filter.UNCHECKED:
        return todos.filter((todo: Todo) => !todo.checked);
    }
  }

  getTodos() {
    return this.filteredTodos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  setTodoName(idx: number, name: string) {
    this.todos[idx].name = name;
  }

  setFilter(filter: Filter) {
    this.filter = filter;
  }
}
