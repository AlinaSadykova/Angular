// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-onepet',
//   templateUrl: './onepet.component.html',
//   styleUrls: ['./onepet.component.css']
// })
// export class OnepetComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onepet',
    templateUrl: './onepet.component.html',
    styleUrls: ['./onepet.component.css']
})
export class OnepetComponent implements OnInit {
  text = "Details about ";
  _errors: string = "";
  _pet: any={name: "", breed:"", descroption:"", skills:[""]};
  
  constructor(private http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    let robs = this._route.paramMap;
    robs.subscribe(params=>this.getinfo(params.get("id")))
    console.log(this._pet)
   
  }
  
  getinfo(id){
    let obs = this.http.getPetById(id);
  obs.subscribe(data=>{
    if(data === null || "kind" in data){
      this._router.navigate(["/"])
    }else{
      this._pet = data;
      console.log(this._pet)
    }
    })
  }
  // delete(id){
  //   let obs = this.http.delPet(id);
  //   obs.subscribe(params=>this.getinfo(params.get("id")))
  //       this._router.navigate(["/"])
  // }
  delete(id){
    this.http.delPet(id).subscribe(data=>
    {
      this._router.navigate(["/"])
     
    })
  } 

}
