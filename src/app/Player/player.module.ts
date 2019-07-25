import { NgModule } from '@angular/core';
import { PlayerComponent } from './Player.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
    declarations: [ PlayerComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
       
    ]
})

export class PlayerModule {

}
