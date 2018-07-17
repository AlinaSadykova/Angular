import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    

  }
  maketask(data){
    return this._http.post("/api/tasks", data)  
  }

  displaytask(){
    return this._http.get("/api/tasks")

  }
  getTaskById(id){
    
    return this._http.get('/api/tasks/'+id)
  }
  deltask(id){
    
    return this._http.delete('/api/tasks/'+id)
  }
  uptask(id, data){
    return this._http.patch('/api/tasks/'+id, data)
  }
}
