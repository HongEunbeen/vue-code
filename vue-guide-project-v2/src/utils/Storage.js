const STORAGE_KEY = "todos-vuejs-2.0";

const todoStorage = {
  fetch: function(){
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach((element, index) => {
      element.id = index;
    });

    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

export { todoStorage };