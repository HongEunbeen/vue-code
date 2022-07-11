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
  var filters = {
    all: function(todos){
      return todos;
    },
    active: function(todos){
      return todos.filter(function(todo){
        return !todo.completed;
      });
    },
    completed: function(todos){
      return todos.filter(function(todo){
        return todo.completed;
      })
    }
  }

  export default{
    props:['data'],
    directives: {
      "todo-focus": function(el, binding) {
        if(binding.value){
          el.focus();
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