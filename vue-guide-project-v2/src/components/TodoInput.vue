<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="data.newTodo"
      @keydown.enter="addTodo"
    />
  </header>
</template>

<script>

    import { todoStorage } from "../utils/Storage";

    export default{
      props:['data'],
      methods: {
        addTodo: function(){
          var value = this.data.newTodo && this.data.newTodo.trim();
          if(!value) return;
          
          this.data.todos.push({
            id: todoStorage.uid++,
            title: value,
            completed: false
          });
          this.data.newTodo = "";
        }
      }
    }
</script>