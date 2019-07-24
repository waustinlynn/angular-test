import { NgModule } from '@angular/core';
import { PlayerComponent } from './Player/Player.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes  = [{path: '', component: PlayerComponent}] ;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
