<template>
  <main>
    <TodoInput :data.sync="data"/>
    <Todos :data.sync="data"/>
    <Footer :data.sync="data"/>
  </main>
</template>


<script>
import Todos from "../components/Todos.vue";
import Footer from "../components/Footer.vue";
import TodoInput from "../components/TodoInput.vue";
import { todoStorage } from "../utils/Storage";

export default{
   data(){
    return{
      data: {
        todos: todoStorage.fetch() ?? [],
        newTodo: "",
        editedTodo:null,
        visibility:"all"
      },
    }
  },
  components:{
    Todos,
    TodoInput,
    Footer
  },
  watch:{
    todos:{
      handler: function(todos){
        todoStorage.save(todos);
      },
      deep: true
    }
  }
}
</script>