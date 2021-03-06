import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { RoomFormComponent } from './components/room/room-form/room-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomAddComponent } from './components/room-add/room-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomFormComponent,
    RoomAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
