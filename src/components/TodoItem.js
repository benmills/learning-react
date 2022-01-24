import React from "react"

function TodoItem(props){
  const [completed, setComplete] = React.useState(false)

  let clickHandler = () => {
    console.log(completed)
    setComplete(!completed)
    console.log(completed)
    console.log("Done")
  }

  return (
    <div>
      <input type="checkbox"
            checked={completed}
            onChange={clickHandler} />
      {props.todo.title}
    </div>
  )
}

export default TodoItem
