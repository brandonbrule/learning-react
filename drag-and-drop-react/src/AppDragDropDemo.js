import React, { Component } from 'react';
import ExampleApp1 from "./ExampleApps/ExampleApp1";
import ExampleApp2 from "./ExampleApps/ExampleApp2";
import ExampleApp3 from "./ExampleApps/ExampleApp3";

class AppDragDropDemo extends Component {
  state = {
      tasks: [
          {name:"Full App Item 1", component: <ExampleApp1 />, region:"nav"},
          {name:"Full App Item 2", component: <ExampleApp2 />, region:"nav"},
          {name:"Full App Item 3", component: <ExampleApp3 />, region:"nav"}
        ]
  }

  onDragStart = (ev, id) => {
      console.log('dragstart:',id);
      ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
      ev.preventDefault();
  }

  onDrop = (ev, cat) => {
     let id = ev.dataTransfer.getData("id");

     let tasks = this.state.tasks.filter((task) => {
         if (task.name == id) {
             task.region = cat;
         }
         return task;
     });

     this.setState({
         ...this.state,
         tasks
     });
  }

  render() {
      var tasks = {
          nav: [],
          region1: [],
          region2: []
      }

      this.state.tasks.forEach ((t) => {
        console.log(t.region);
        if(t.region !== "nav"){
          tasks[t.region].push(
              <div key={t.name}
                  onDragStart = {(e) => this.onDragStart(e, t.name)}
                  draggable
                  className="draggable"
              >
                  {t.component}
              </div>
          );
        } else {
          tasks[t.region].push(
              <li key={t.name}
                  onDragStart = {(e) => this.onDragStart(e, t.name)}
                  draggable
                  className="draggable"
              >
                  {t.name}
              </li>
          );
        }
      });

      return (
          <div className="container-drag">

              <div className="nav"
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>{this.onDrop(e, "nav")}}>

                  <ul>
                    {tasks.nav}
                  </ul>
              </div>

              <div class="site-container">

                <div className="region1"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "region1")}>
                     {tasks.region1}
                </div>

                <div className="region2"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "region2")}>
                     {tasks.region2}
                </div>

              </div>


          </div>
      );
  }
}

export default AppDragDropDemo;
