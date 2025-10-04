export default {
    template: `
        <input type="text" v-model="event">
        <button @click="add()">新增事項</button>
        <button @click="$emit('addTodo', event)">新增事項</button>
    `,
    methods:{
        add(){
            this.$emit('addTodo',this.event)
            this.event=''
        }
    },
    emits:['addTodo'],
    data(){
        return {
            event: '',
        }
    }
}