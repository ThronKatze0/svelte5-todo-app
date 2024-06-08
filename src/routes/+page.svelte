<script lang="ts">
  import { TodoMgr } from "$lib/TodoMgr.svelte";
  import { Todo } from "$lib/Todo.svelte";
  import { Heading } from "flowbite-svelte";
  import {
    Input,
    Checkbox,
    Label,
    Helper,
    Button,
    Card,
  } from "flowbite-svelte";

  let todoMgr: TodoMgr = new TodoMgr();
  let todoNameInput: string = $state("");

  function addTodo(event: Event) {
    event.preventDefault();
    todoMgr.addTodo(new Todo(todoNameInput, false));
    todoNameInput = "";
  }
</script>

<Heading
  tag="h1"
  class="mt-4 mb-5 text-center text-primary-700"
  customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
  >Svelte5 Todo App</Heading
>

<form onsubmit={addTodo}>
  <div class="flex flex-row items-center justify-center mb-10">
    <Input
      bind:value={todoNameInput}
      class="w-1/6 mr-3"
      type="text"
      placeholder="Todo"
    />
    <Button type="submit" onclick={addTodo}>Submit</Button>
  </div>
  <div class="grid grid-cols-4 gap-5 mx-20">
    {#each todoMgr.getTodos() as todo}
      <Card>
        <div class="flex flex-row">
          <Heading tag="h2">{todo.getName()}</Heading>
          <Checkbox bind:checked={todo.checked}></Checkbox>
        </div>
      </Card>
    {/each}
  </div>
</form>
