<template>
    <div>
        <TodoForm></TodoForm>
        <ul v-for="(item, index) in todos">
            <li @click='removeTodo(index)'>{{item}}</li>
        </ul>
    </div>
</template>

<script>
import TodoForm from "./TodoForm"
export default{
    name: 'todolist',
    components: {TodoForm} ,
    props: ['todos'],
    methods: {
        removeTodo(index){
            this.todos.splice(index,1)
        }
    } 
}
</script>


<style>
</style>