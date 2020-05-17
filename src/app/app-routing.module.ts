import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePlantPageComponent} from './plant/create-plant-page/create-plant-page.component';
import {PlantsListPageComponent} from './plant/plants-list-page/plants-list-page.component';


const routes: Routes = [
  {path: 'plants', component: PlantsListPageComponent},
  {path: 'plants/create', component: CreatePlantPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
