import TodoCreate from './TodoCreate.js'
export default {
    data(){
        return {
            title: 'Hello Vue',
            event: '',
            todos: ['item','item2']
        }
    },
    components:{
        TodoCreate
    },
    template:`
        <TodoCreate></TodoCreate>
        <ul>
            <li v-for='todo of todos'>{{todo}}</li>
        </ul>
    `,
    methods: {
        add(){
            this.todos.push(this.event);
            this.event = ''
        }
    }
}