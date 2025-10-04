import TodoCreate from './TodoCreate.js'
import TodoList from './TodoList.js'
export default {
    data(){
        return {
            title: 'Hello Vue',
            
            todos: [
                'item 1',
                'item 2',
                'item 3',

            ]
        }
    },
    components:{
        TodoCreate,TodoList
    },
    template:`
        <TodoCreate @addTodo="add_todo"></TodoCreate>
        <TodoList :todos="todos"></TodoList>
    `,
    methods: {
        add_todo(data){
            this.todos.push(data)
        }
    }
}