import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreatePlantPageComponent} from './plant/create-plant-page/create-plant-page.component';
import {PlantsListPageComponent} from './plant/plants-list-page/plants-list-page.component';
import {HttpClientModule} from '@angular/common/http';
import {PlantTypesListPageComponent} from './admin/plant-type/plant-types-list-page/plant-types-list-page.component';
import {AdminMainComponent} from './admin/admin-main/admin-main.component';
import {CreatePlantTypePageComponent} from './admin/plant-type/create-plant-type-page/create-plant-type-page.component';
import { CreateFamilyPageComponent } from './admin/family/create-family-page/create-family-page.component';
import { FamiliesListPageComponent } from './admin/family/families-list-page/families-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlantPageComponent,
    PlantsListPageComponent,
    PlantTypesListPageComponent,
    AdminMainComponent,
    CreatePlantTypePageComponent,
    CreateFamilyPageComponent,
    FamiliesListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
