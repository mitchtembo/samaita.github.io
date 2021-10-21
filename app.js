const vm = new Vue({
    el: "#app",
    data(){
        return{
            todoItem: '',
          // this array will hold all the todos
          todoItems: [],
          id:0,
        }
    },
    methods: {
        InserItem(){
            this.todoItems.push({name:this.todoItem,isCompleted: false ,id:this.id, editing:false })
            this.id++
            this.todoItem = ''
      },

      taskEdit(task){
           console.log("name was clicked")
           task.editing = true
      },
      editCompleted(task){
          task.editing = false
      },

      remove(index){
          this.todoItems.splice(index,1)

      }
  }
    
  
        
          

        
    
})