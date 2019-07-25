import { Component , OnInit } from '@angular/core';
import { InmemoryService } from '../inmemory.service';
import { Subject, of } from 'rxjs';
@Component({
    selector: 'app-player',
    templateUrl: 'player.component.html',
    styleUrls: ['player.component.css']
})

export class PlayerComponent implements OnInit {
    rowData: Players[];
    columnDefs: PlayerColums[] = [];
    constructor(private service: InmemoryService){}

    ngOnInit() {
        this.service.getPlayers().subscribe(data => {
            this.rowData = 
                data.map(val => {
                    return {name: val.name, position:  val.position, jerseyNumber: val.jerseyNumber, nationality: val.nationality }
               })
        
        }); 
    }
}
