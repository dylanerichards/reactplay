class TodoList extends React.Component {

  submit() {
    data = $(".todo-form").serialize()

    $.ajax({
      type: "POST",
      url: "/todos",
      data: data,

      success: function() {
        console.log("success")
      },

      error: function() {
        console.log("error")
      }

    });

  }

  render() {
    var todos = this.props.todos.map(function(todo) {
      return (
        <li key={todo.id} >
          {todo.description}
        </li>
      );
    });

    return (
      <div>
        <form action="/todos" className="todo-form">
          <input className= "description" type="text" name="description"></input>
          <button onClick={ this.submit } className="add" type="button">Add</button>

          <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />

        </form>

        <ul>
          { todos }
        </ul>
      </div>
    );
  }
}
