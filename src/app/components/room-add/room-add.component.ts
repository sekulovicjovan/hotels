import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {
@Output( )  onAddRoom : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    if (confirm('Da li zelite da dodate novu sobu?')) {
      this.onAddRoom.emit(true);
    }else{
      this.onAddRoom.emit(false);
    }
  }

}
