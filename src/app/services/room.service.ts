import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

rooms:Room[];

  constructor() {
this.rooms = [
  {id: 1, img:'assets/img/room.jpg', title:'Room 1', price: 50 },
  {id: 2, img:'assets/img/room.jpg', title:'Room 2', price: 100 },
  {id: 3, img:'assets/img/room.jpg', title:'Room 3', price: 150 }
]

}

addRoom() : Observable<Room[]>{
  return of(this.rooms)
}
getRoom(room: Room) {
  this.rooms.push(room);
}
deleteRoom(room : Room){
this.rooms.forEach((curr, i) =>{
  if (room.id == curr.id) {
    this.rooms.splice(i, 1);

  }
})
}


}

