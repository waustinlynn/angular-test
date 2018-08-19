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
players: IPlayer[] = [];

filteredPlayers: IPlayer[];
sortType: string;
sortReverse: boolean = false;

  constructor(inmemoryService: InmemoryService) {
  this.players = inmemoryService.getPlayers();
  }

  ngOnInit(): void {
  this.filteredPlayers = this.players;
  this.sortPlayers('id');
  }

  sortPlayers(property) {
        this.sortType = property;
        this.sortReverse = !this.sortReverse;
        this.filteredPlayers.sort(this.dynamicSort(property));
    }

    dynamicSort(property) {
        let sortPlayer = -1;

        if (this.sortReverse)
            sortPlayer = 1;

        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

            return result * sortPlayer;
        }
    }

    filterPlayers(search: string) {
        this.filteredPlayers = this.players.filter(o =>
            Object.keys(o).some(k => {
                if (typeof o[k] === 'string')
                    return o[k].toLowerCase().includes(search.toLowerCase());
            }));
    }

  
}