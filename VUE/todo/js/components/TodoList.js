export default {
    template:`
        <ul>
            <li v-for="todo of todos">{{todo}}</li>
        </ul>
    `,
    // props:['todos']
    props: {
        todos: Array
    }
}