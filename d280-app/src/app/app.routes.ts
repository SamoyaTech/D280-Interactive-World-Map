import { Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';

export const routes: Routes = [
    { path: "map", component : WorldComponent},
    { path: '' , redirectTo:'/map', pathMatch:'full' }
];




