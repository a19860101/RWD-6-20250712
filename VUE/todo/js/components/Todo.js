export default {
    data(){
        return {
            title: 'Hello Vue',
            event: '',
            todos: ['item','item2']
        }
    },
    template:`
        <input type="text" v-model="event">
        <button @click="add()">新增事項</button>
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