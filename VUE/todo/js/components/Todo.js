import TodoCreate from './TodoCreate.js'
import TodoList from './TodoList.js'
export default {
    data(){
        return {
            title: 'Hello Vue',
            event: '',
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
        <TodoCreate></TodoCreate>
        <TodoList :todos="todos"></TodoList>
    `,
    methods: {
        add(){
            this.todos.push(this.event);
            this.event = ''
        }
    }
}