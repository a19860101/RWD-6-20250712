export default {
    template:`
        <h2>未完成</h2>
        <ul>
            <li v-for="uctodo of uc_todos" :key="uctodo.id">
                <input type="checkbox" v-model="uctodo.isCompleted">
                {{uctodo.title}}
            </li>
        </ul>
        <h2>已完成</h2>
        <ul>
            <li v-for="ctodo of c_todos" :key="ctodo.id">
                <input type="checkbox" v-model="ctodo.isCompleted">
                {{ctodo.title}}
            </li>
        </ul>
        
    `,
    // props:['todos']
    props: {
        todos: Array,
        c_todos: Array,
        uc_todos: Array
    }
}