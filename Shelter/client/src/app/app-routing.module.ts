import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpetsComponent } from './allpets/allpets.component';
import { NewpetComponent } from './newpet/newpet.component';
import { OnepetComponent } from './onepet/onepet.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: "pets", component: AllpetsComponent},
  { path: "pets/new", component: NewpetComponent },
  { path: "pets/:id", component: OnepetComponent},
  { path: "pets/:id/edit", component: EditComponent },
  { path: "", pathMatch: "full", redirectTo: "pets"},
  { path: "**", pathMatch: "full", redirectTo: "pets"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
