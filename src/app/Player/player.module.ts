import { NgModule } from '@angular/core';
import { PlayerComponent } from './Player.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ PlayerComponent],
    imports: [
        CommonModule,
        FormsModule,
        AgGridModule.withComponents([])
    ]
})

export class PlayerModule {

}
