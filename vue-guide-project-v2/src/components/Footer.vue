<template>
  <footer class="footer" v-show="data.todos.length" v-cloak>
    <span class="todo-count">
       <b>{{ remaining }}</b> {{ remaining | pluralize }} left
    </span>
  </footer>
</template>

<script>
import { filters } from "../utils/Filters";

export default{
  props:['data'],
  computed: {
    remaining: function(){
      return filters.active(this.data.todos).length;
    },
  },
  filters: {
    pluralize: function(n){
      return n === 1 ? "item" : "items"
    }
  }
}
</script>