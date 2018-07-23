import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllpetsComponent } from './allpets/allpets.component';
import { OnepetComponent } from './onepet/onepet.component';
import { NewpetComponent } from './newpet/newpet.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllpetsComponent,
    OnepetComponent,
    NewpetComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
