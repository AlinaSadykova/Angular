import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    

  }
  makePet(data){//create new author
    return this._http.post("/api/pets", data)  
  }

  displayPets(){//get all authors
    console.log("GOT TO SERVICE")
    return this._http.get("/api/pets")

  }
  getPetById(id){//get by id
    
    return this._http.get('/api/pets/'+id)
  }
  delPet(id){
    
    return this._http.delete('/api/pets/'+id)
  }
  
  upPet(id, data){
    return this._http.patch('/api/pets/'+id, data)
  }
  
 
}
