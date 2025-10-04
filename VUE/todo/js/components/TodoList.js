export default {
    template:`
        <ul>
            <li v-for="todo of todos">
                <input type="checkbox" v-model="todo.isCompleted">
                {{todo.title}}
            </li>
        </ul>
    `,
    // props:['todos']
    props: {
        todos: Array
    }
}