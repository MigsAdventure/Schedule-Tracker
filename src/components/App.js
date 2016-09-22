const React = require('react');
const InputForm = require('./InputForm.js');
const Table = require('./Table.js');

const App = React.createClass({
  getInitialState() {
     return {
      tasks: [],
      edited: ''
    }
  },

  componentWillMount() {
    const data = localStorage.savedState;
    let savedState;

    try {
      savedState = JSON.parse(data);
      this.setState(savedState);
    } catch (err) {

    }

  },

  componentWillUpdate(nextProps, nextState) { // we only need the 2nd argument to get the next state
    const data = JSON.stringify(nextState);
    localStorage.savedState = data;
  },



  getInfo(task) {
    let {tasks} = this.state;
    this.setState({
      tasks: [...tasks, task]
    });
  },

  removeTask(taskId) {
    let {tasks} = this.state;
    let taskDel = tasks.filter(task => (taskId !== task.taskId));
    this.setState({
      tasks: taskDel
    });
  },

  editTask(editInfo) {
    console.log("object passed to editTask func: ", editInfo);
    let {tasks} = this.state;
    let taskEdit = tasks.forEach(task => {
      if (task.taskId === editInfo.id) {
        console.log(task.target);
      }

    });

   },

  render() {

    let {tasks} = this.state;
    return (
      <div>
        <h1>My Crazy Schedule!</h1>
        <InputForm getTask={this.getInfo} />
        <Table tasks={tasks} removeBtn={this.removeTask} getEdit={this.editTask} />
      </div>
    )
  } 
});

module.exports = App;