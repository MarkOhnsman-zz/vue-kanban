<template>
  <div id="page">
    <name></name>
    <todoList :todos="page.todos" :title="page.name"></todoList>
  </div>
</template>

<script>
import name from "./Title"
import todoList from "./TodoList"

export default {
  name: 'page',
  props: ['page'],
  components: {
    name,
    todoList
  }
}
</script>

<style>

</style>