<template>
  <Todos />
</template>

<script>
import { onMounted } from 'vue'
import Todos from '../src/components/Todos/Todos.vue'

export default{
  components: {
    Todos
  },
  setup(){
    onMounted(() => {
      console.log("mounted");
    })
  }
}
</script>