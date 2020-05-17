import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plant-types-list-page',
  templateUrl: './plant-types-list-page.component.html',
  styleUrls: ['./plant-types-list-page.component.scss']
})
export class PlantTypesListPageComponent implements OnInit {
  plantTypes: any[];

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/plant-types')
      .subscribe(types => {
        this.plantTypes = types;
      });
  }
}
