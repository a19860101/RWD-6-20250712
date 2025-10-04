import TodoCreate from './TodoCreate.js'
import TodoList from './TodoList.js'
export default {
    data(){
        return {
            title: 'Hello Vue',
            
            todos: [
                {
                    id: 1,
                    title: 'list 1',
                    isCompleted: true
                }
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
            this.todos.push({
                id: Date.now(),
                title: data,
                isCompleted: false
            })
        }
    }
}