<template>
  <div class="flex justify-center items-baseline h-full pt-4 sm:p-16">
    <div class="w-[30rem] h-full m-4 flex flex-col">
      <div class="w-full mb-12 flex justify-between items-center">
        <div>
          <i class="fa-solid fa-list-ul mr-4 sm:text-2xl align-baseline text-gray-400"></i>
          <h1 class="text-sm sm:text-2xl font-bold inline-block text-gray-400">To Do List</h1>
        </div>
        <div>
           <ul :class="{'all' : filter === 'all' , 'done' : filter === 'done' , 'undone' : filter === 'undone'}"
              class="flex justify-between relative overflow-hidden afte:block after:h-[40px] sm:after:h-[45px] after:bg-slate-900 after:absolute after:rounded-lg after:-z-10 after:transition-all">
              <li @click="filter = 'all'" class="py-2 px-4 sm:text-xl text-gray-400 cursor-pointer">All</li>
              <li @click="filter = 'done'" class="p-2 px-4 sm:text-xl text-gray-400 cursor-pointer">Done</li>
              <li @click="filter = 'undone'" class="p-2 px-4 sm:text-xl text-gray-400 cursor-pointer">Undone</li>
            </ul>
        </div>
      </div>
      <div class="w-full flex flex-row">
        <input 
          @keypress.enter="task_edit.select_task_for_edit === false ? Add() : Edit()" 
          ref="input"
          type="text" 
          placeholder="Add a new task" />
        <Button 
          @click="Add" 
          Value="Add" 
          AddClass="basis-1/4 bg-slate-900 text-gray-400 hover:text-gray-400"
          v-show="task_edit.select_task_for_edit === false"></Button>
        <Button 
          @click="Edit" 
          Value="Edit" 
          AddClass="basis-1/4 bg-slate-900 text-gray-400 hover:text-gray-400"
          v-show="task_edit.select_task_for_edit === true"></Button>
      </div>
    </div>
  </div>

</template>

<script>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

export default{
  components: {

  },
  setup(){
    const toast = useToast();
    const input = ref(null);
    const filter = ref("all");
    const task_edit = ref({
      index: 0,
      text: " ",  
      select_task_for_edit: false
    });
    const tasks = JSON.parse(localStorage.getItem("missions"));

    return {
      toast,
      input,
      filter,
      task_edit,
      tasks
    }
  },
  methods: {
    Add: function(){
      console.log("aa");
    },
    Edit: function(){
      console.log("bb");
    }
  }
}
</script>
