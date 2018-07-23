import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 errors: string = "";
 err2: string = "";
 err3: string = "";
 err4: string = "";
 _pet : any= {name: "", breed:"", description:"", skills:[""]};
 text = "Edit this pet"
  constructor(private http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    let robs = this._route.paramMap;
    robs.subscribe(params=>this.getinfo(params.get("id")))

}
getinfo(id){
  let obs = this.http.getPetById(id);
obs.subscribe(data=>{
  if(data === null || "kind" in data){
    this._router.navigate(["/"])
  }else{
    this._pet = data;
  }
  })
}


edit(){
  console.log("in component",this._pet)
  let obs = this.http.upPet(this._pet._id, this._pet)
  obs.subscribe(data=>{
    console.log("this is erors", data['errors'])
    if('errors' in data){
        console.log(data['errors'])
        if(data['errors']['name']['message'] !== null){
          this.errors =  data['errors']['name']['message'];
        }
        if(data['errors']['breed']['message'] !== null){
          this.err2=  data['errors']['breed']['message'];
        }
        if(data['errors']['description']['message'] !== null){
          this.err4=  data['errors']['description']['message'];
        }
        if(data['errors']['skills']['message'] !== null){
          this.err3=  data['errors']['skills']['message'];
        }  
      }else{
        this._router.navigate(['/pets',this._pet._id])
      }
    })
  }
}