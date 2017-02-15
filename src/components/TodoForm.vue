<template>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo">
      <button>Add Todo</button>
    </form>
</template>

<script>
export default{
    name: 'todoForm',
    data(){
        return{
             todo: ''
        }
    },
    methods: {
        addTodo(){
            this.$parent.todos.push(this.todo)
            this.todo = ''
     }
    } 
}
</script>


<style>
</style>