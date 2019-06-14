import React from "react"
import "./components/TodoComponents/Todo.css"

const todos = [
    {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false,
    },
    {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false,
    },
]

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos, //todos: todos
        }
    }

    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <h2>Welcome My Fantastic To DO List!</h2>
                    {/* <TodoForm /> */}
                </div>
                {/* <TodoList /> */}
                <div>
                    <button>Enter To Do</button>
                </div>
            </div>
        )
    }
}

export default App
