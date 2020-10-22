import React, {Component} from 'react';
// import * as Todo from '../Todo';
import Todo from '../Todo';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [{id: 1, userId: 5, title: 'delectus aut autem', completed: false}]};
    }

    render() {
        const {todos} = this.state;
        return <ul>{todos.map((todo, key) => <Todo {...{key}} {...todo}/>)}</ul>;
    }

    async componentDidMount() {
        this.setState({todos: await fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())});
    }
}