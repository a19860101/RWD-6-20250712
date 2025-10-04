export default {
    data(){
        return {
            title: 'Hello Vue',
            event: '',
            todos: ['item','item2']
        }
    },
    methods: {
        add(){
            this.todos.push(this.event);
            this.event = ''
        }
    }
}