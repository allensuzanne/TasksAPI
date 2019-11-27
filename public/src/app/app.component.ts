import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

export class AppModule {
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})

export class AppComponent implements OnInit {
  allTasks = [];
  oneTask ={};
  newTask: any;
  editedTask = {};
  editTaskBool = false;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newTask = {
      title: "",
      description: ""};
      this.editedTask={};
  }

  getTaskFromClick(num: Number){
    console.log("This is the num "+num);
    let observable = this._httpService.showOneTask({data: num});
    observable.subscribe(data => {
      console.log("Got the one task " + data);
      this.oneTask = data;
    });
  }
  
  getAllTasks(){
    let observable = this._httpService.showAll();
    observable.subscribe(data => {
      console.log("Got all of the tasks");
      this.allTasks = data;
    });
  }
  
  createNewTask(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data=>{
      console.log("Got data from new task post back ", data);
      this.newTask = {title: "", description: ""}
      this.getAllTasks();
    })
  }

  editTaskForm(task){
    this.editedTask=task;
    this.editTaskBool=true;
  }

  editTask(){
    let observable = this._httpService.editTask(this.editedTask);
    observable.subscribe(data =>{
      console.log("Edited a task " + data);
      this.editedTask = data;
      this.editTaskBool = false;
      this.getAllTasks();
    })
  }

  deleteTask(num: Number){
    let observable = this._httpService.removeOne({data:num});
    observable.subscribe(data =>{
      console.log("deleted a task");
    })
  }

}