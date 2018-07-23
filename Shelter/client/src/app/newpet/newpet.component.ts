// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-newpet',
//   templateUrl: './newpet.component.html',
//   styleUrls: ['./newpet.component.css']
// })
// export class NewpetComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { getHeapStatistics } from 'v8';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {
  errors: String="";
  err: string="";
  err3: string="";
  err4: string="";
  _pet = {name: "", breed:"", descroption:"", skills:[""]};
  text =  "Know of the pet needing a home?"
  as:string = "";

  constructor(private http: HttpService, private router: Router) { }
  

  ngOnInit() {
  }
  makeAuthor(){
    let obs = this.http.makePet(this._pet);
    obs.subscribe(data=>{
      console.log(data)
      if('errors' in data)
      {
        this.errors = data['errors']['name']['message'] ;
        if(data['errors']['name']['message'] !== null){
          this.errors =  data['errors']['name']['message'];
        }
        if(data['errors']['breed']['message'] !== null){
          this.err=  data['errors']['breed']['message'];
        }
        if(data['errors']['description']['message'] !== null){
          this.err4=  data['errors']['description']['message'];
        }
        if(data['errors']['skills']['message'] !== null){
          this.err3=  data['errors']['skills']['message'];
        }
        console.log("yy", this.errors)
        
      }else{
        this.router.navigate([""])
      }
      
    })
  }
}