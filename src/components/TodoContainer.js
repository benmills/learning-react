import React from "react"
import TodosList from "./TodosList";


class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Finish this app",
        completed: false
      }
    ]
  }

  logState() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} />
        <a href="#" onClick={() => console.log(this.state)}>Log State</a>
      </div>
    )
  }
}

export default TodoContainer
