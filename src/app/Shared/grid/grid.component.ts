import { Component, OnInit , Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit, OnChanges   {
    @Input() gridData: any;
    rowData: any[] = [];
    columnDefs: PlayerColums[] = [];
    constructor() {}

    ngOnChanges() {
        this.prepareGrid();
    }

    ngOnInit() {}

    prepareGrid() {
        if (this.gridData && this.gridData.length > 0) {
            this.rowData = this.gridData.map(val => {
                return {name: val.name, position:  val.position, jerseyNumber: val.jerseyNumber, nationality: val.nationality }
               });

           this.columnDefs = Object.keys(this.rowData[0]).map(col => {
               return {headerName: col.toUpperCase(), field: col, sortable: true};
             });
        }
    }
}
