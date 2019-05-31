import React from "react"

import "./components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"



const todos = [
    {
        task: "clean house",
        id: 100,
        completed: false,
    },
    {
        task: "cook dinner",
        id: 101,
        completed: false,
    },
    {
        task: "feed dogs",
        id: 102,
        completed: false,
    },
    {
        task: "clean cat box",
        id: 103,
        completed: false,
    },
    {
        task: "exercise",
        id: 104,
        completed: false,
    },
]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos,
        }
    }

    addItem = item => {
      let newItem = {
        task: item,
        id: Date.now(),
        completed: false
      };
      const sorted = [...this.state.todos, newItem].sort(function(a,b) {
        let taskA = a.task.toUpperCase(),
        let taskB = b.task.toUpperCase(),
        return taskA > taskB ? 1 : -1;
      });

      this.setState({todos: sorted});
    }


    toggleItem = id => {
      let todos = this.state.todos.slice();
      todos = todos.map(item => {
        if (item.id === id){
          item.completed = !item.completed;
          return item;
        } else {
          return item;
        }
        
      });
      this.setState({ todos });
      
    };
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <div>
                <h2>One Awesome Todo List!</h2>
            </div>
        )
    }
}

export default App
