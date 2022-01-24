import React from "react"

class TodoItem extends React.Component {
  render() {
    let self = this

    let clickHandler = () => {
      console.log("Trying to complete...")
      console.log(this)
      self.setState({
        todos: [
          {
            id: 1,
            title: "Oh this worked",
            completed: true
          }
        ]
      })
    }

    return (
      <div>
        <input type="checkbox"
              checked={this.props.todo.completed}
              onChange={clickHandler} />
        {this.props.todo.title}
      </div>
    )
  }
}

export default TodoItem
