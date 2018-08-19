import { Component, OnInit } from '@angular/core';
import { InmemoryService } from './inmemory.service';
import { IPlayer } from './player';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InmemoryService]  
})
export class AppComponent {

player: IPlayer = null;
origilnalPlayerList: Iplayer[] = [];
players: IPlayer[] = [];
postions: IPlayer[] = [];

  constructor(inmemoryService: InmemoryService) {
  this.origilnalPlayerList = inmemoryService.getPlayers();
  this.players = inmemoryService.getPlayers();
  this.postions = inmemoryService.getPlayers();
  }

  filter(type){
    this.players = this.origilnalPlayerList.filter((player: IPlayer) => player.position === type); 
    return this.players;   
  }

  reset(){
    this.players = this.origilnalPlayerList; 
    return this.players;  
  }
}