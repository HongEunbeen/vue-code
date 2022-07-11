<style scoped>
  /* [v-cloak] {
    display:none;
  } */
</style>

<template>
  <section class="main" v-show="data.todos.length">
    <input 
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="allDone"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list"> 
      <li
        v-for="todo in data.todos"
        class="todo"
        :key="todo.id"
        :class="{completed: todo.completed, editing: todo == data.editedTodo}"
      >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="todo.completed" />
          <label @dblclick="editTodoFunc(todo)">{{todo.title}}</label>
          <button class="destroy" @click="removeTodoFunc(todo)"></button>
        </div>
        <input 
          class="edit"
          type="text"
          v-model="todo.title"
          v-todo-focus="todo == data.editedTodo"
          @blur="doneEditFunc(todo)"
          @keyup.enter="doneEditFunc(todo)"
          @keyup.esc="cancelEditFunc(todo)"
        />
      </li>
    </ul>
  </section>
</template>


<script>

import { filters } from "../utils/Filters";

  export default{
    props:['data'],
    directives: {
      "todo-focus": function(el, binding) {
        if(binding.value){
          el.focus();
        }
      }
    },
    computed: {
      remaining: function(){
        return filters.active(this.data.todos).length;
      },
      allDone: {
        get: function(){
          return this.remaining === 0;
        },
        set: function(value){
          this.data.todos.forEach(todo => {
            todo.completed = value;
          })
        }
      }
    },
    methods: {
      editTodoFunc: function(todo){
        console.log("edit" + todo);
        this.data.beforeEditCache = todo.title;
        this.data.editedTodo = todo;
      },
      removeTodoFunc: function(todo){
        this.data.todos = this.data.todos.filter(item => item !== todo);
      },
      doneEditFunc: function(todo){
        if(!this.data.editedTodo){
          return;
        }
        this.data.editedTodo = null;
        todo.title = todo.title.trim();
        if(!todo.title){
          this.data.removeTodoFunc(todo);
        }
      },
      cancelEditFunc: function(todo){
        this.data.editedTodo = null;
        todo.title = this.data.beforeEditCache;
      },
    }
  }
</script>