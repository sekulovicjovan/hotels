import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.addRoom().subscribe((rooms)=>{
      this.rooms = rooms;
    })
  }
  onDelete(room : Room){

    if (confirm('Da li ste sigurni da zelite da obrisete sobu?')) {

      this.roomService.deleteRoom(room)
    }

  }
  onUpdateRoom(room : Room){
    this.roomService.updateRoom(room)
  }

}
