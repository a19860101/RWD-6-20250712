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
                    isCompleted: false
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
        <div>
            {{completedTodos}}
            <hr>
            {{unCompletedTodos}}
        </div>
    `,
    methods: {
        add_todo(data){
            this.todos.push({
                id: Date.now(),
                title: data,
                isCompleted: false
            })
        }
    },
    computed:{
        completedTodos(){
            return this.todos.filter(data => data.isCompleted == true)
        },
        unCompletedTodos(){
            return this.todos.filter(data => data.isCompleted == false)
        }
    }
}