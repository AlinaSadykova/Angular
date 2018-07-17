import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edittask: any = {title: "", description: ""};
  newtask: any = {title: "", description: ""};
  curTask: any =  {title: "", description: ""};
  alltasks: any;
  status: string;
 
  onetask: any = {title: "", description: ""};
  constructor(private _httpService: HttpService){
    this.display();
  this.status = "";
  this.curTask =  {
    title: "",
    description:""
  }
   
  }
  display(){
    this._httpService.displaytask().subscribe(data=>{
      this.alltasks = data;
      console.log(data)
      
    })
  }
  taskify()
  {
    let obs = this._httpService.maketask(this.curTask);
    obs.subscribe(data=>{
    if('errors' in  data){
      this.status = data['errors']['title']['message'];}
    else{
        this.status = "";
        this.display();
      }

    });
  }
 
  gettask(id){
    this._httpService.getTaskById(id).subscribe(data=>
    {
      this.onetask = data;
    })
}
delete(id){
  this._httpService.deltask(id).subscribe(data=>
  {
    this.display();
  })
}
updatetask(id){
  this._httpService.uptask(id, this.edittask).subscribe(data=>
  {
    this.display();
    console.log(data);
    console.log(this.edittask)
    document.getElementById("mydiv").style.display="none";
    
  })
}
showdiv(id){
  console.log(id)
  this.onetask = this._httpService.getTaskById(id).subscribe(data=>
    {
      this.onetask = data;
      this.edittask = data;
      console.log(data)
    })
  
  document.getElementById("mydiv").style.display="inline-block";
}

s}

