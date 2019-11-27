import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {

    this.showAll();

  }

  showAll() {
    return this._http.get('/tasks');
  }
  
  removeOne(num) {
    return this._http.delete('/tasks/'+num.data, num);
  }
  
  showOneTask(num) {
    console.log(num);
    console.log("this is the route tasks/" + num.data)
    return this._http.get('tasks/' + num.data, num);
  }
  addTask(newtask) {
    return this._http.post('/tasks', newtask)
  }
  
  editTask(editedTask){
    return this._http.put('/tasks/'+editedTask._id, editedTask);
  }
  
}