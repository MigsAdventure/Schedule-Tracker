const React = require('react');

const InputForm = React.createClass({

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Task Name: </label><input ref= "nameInput" type="text"/>
        <label>Start Date: </label><input ref="startInput" type="date"/>
        <label>Due Date: </label><input ref="dueInput" type="date"/>
        <button className="btn btn-primary btn-lg">Add Task</button>
      </form>
      )
  },

submit(e) {
  e.preventDefault();
  let {nameInput, startInput, dueInput} = this.refs;
  let newTask = {
    taskName: nameInput.value,
    startDate: startInput.value,
    dueDate: dueInput.value,
    taskId: Date.now()
  }
  this.props.getTask(newTask);
  }

});



module.exports = InputForm;