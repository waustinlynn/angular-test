import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
declarations: [GridComponent],
imports: [ AgGridModule.withComponents([])],
exports:[ GridComponent]
})

export class SharedModule {}
