import { Component, OnInit } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllpetsComponent implements OnInit {
  title = "These pets are loking for a home"
  pets: any;
  constructor(public http: HttpService) { }

  
  ngOnInit() {
    this.startup()    
  }
  startup(){
    console.log("in ngoninit")
    this.http.displayPets().subscribe(data=>{
      this.pets = data;
      console.log(data)})
  }
   
  delete(id){
    this.http.delPet(id).subscribe(data=>
    {
      this.ngOnInit();
    })
  }    
}
