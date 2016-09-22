
//DONT FORGET TO ASK TOBY AND DAVID ABOUT THE REFS!

const React = require('react');
const moment = require('moment');


const Table = React.createClass({
  getInitialState() {
    return {
    name: '',
    date: '',
    due: '',
    id: ''
    }
  },

  getName(e) {
    let name = e.target.value;
    console.log("name Input: ", name);
    this.setState({
      name: name
    });
  },

  getTodaysDate(e) {
    let date = e.target.value;
    console.log("date Input: ", date)
    this.setState({
      date: date
    });
  },

  getDueDate(e) {
    let due = e.target.value;
    console.log('duedate Input: ', due)
    this.setState({
      due: due
    }); 
  },


  getEdit(names,dates,dues,id) {
    let {name, date, due} = this.state;
    let editedTask = {
      name: name,
      date: date,
      due: due,
      id: id
    }
    this.props.getEdit(editedTask);
  },

  saveNow() {
   
  },

  render() {
    const {tasks, removeBtn, getEdit} = this.props;
    return (

      <div>
        <div id="editModal" className="modal fade" role="dialog" >
        <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Edit Task</h4>
          </div>
          <div className="modal-body">
            <div className="form-group row" id="inputsGroup">
                <label htmlFor="nameInput">Name: </label>
                <input type="text" name="" ref="nameEdit" id="name" onChange={this.getName} />
                <label htmlFor="startInput">Todays Date: </label>
                <input type="number"  ref="todayEdit" id="today" onChange={this.getTodaysDate}/>
                <label htmlFor="dueInput">Due Date: </label>
                <input type="number"  ref="dueEdit" id="due" onChange={this.getDueDate}/>
            </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveNow}>Save</button>
          </div>
          </div>
          </div>
          </div> 
      
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Edit</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
             {
              tasks.map((task,i) => ( 
                  <tr key={task.taskId}>
                    <td className="col-xs-4 text-center">{task.taskName}</td>
                    <td className="col-xs-2 text-center">{task.startDate}</td>
                    <td className="col-xs-2 text-center">{task.dueDate}</td>
                    <td className="col-xs-2 text-center"><button className="btn btn-md btn-primary"  data-toggle="modal" data-target="#editModal" onClick={() => this.getEdit(task.taskName,task.startDate,task.dueDate,task.taskId)}>Edit</button></td>
                    <td className="col-xs-2 text-center"><button className="btn btn-md btn-danger" onClick={removeBtn.bind(null, task.taskId)}>x</button></td>
                  </tr>
                  ) //end of return
              ) //end of map  
             }
            </tbody>
          </table>
      </div>
      ) //end of  RENDER return
    }//end of render function

});

module.exports = Table;


 