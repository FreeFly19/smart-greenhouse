import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePlantPageComponent} from './plant/create-plant-page/create-plant-page.component';
import {PlantsListPageComponent} from './plant/plants-list-page/plants-list-page.component';
import {AdminMainComponent} from './admin/admin-main/admin-main.component';
import {PlantTypesListPageComponent} from './admin/plant-type/plant-types-list-page/plant-types-list-page.component';
import {CreatePlantTypePageComponent} from './admin/plant-type/create-plant-type-page/create-plant-type-page.component';
import {FamiliesListPageComponent} from './admin/family/families-list-page/families-list-page.component';
import {CreateFamilyPageComponent} from './admin/family/create-family-page/create-family-page.component';


const routes: Routes = [
  {path: 'plants', component: PlantsListPageComponent},
  {path: 'plants/create', component: CreatePlantPageComponent},
  {
    path: 'admin-panel', component: AdminMainComponent, children: [
      {path: 'plant-types', component: PlantTypesListPageComponent},
      {path: 'plant-types/create', component: CreatePlantTypePageComponent},
      {path: 'families', component: FamiliesListPageComponent},
      {path: 'families/create', component: CreateFamilyPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
