import React from "react"

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
        id: 103,
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
