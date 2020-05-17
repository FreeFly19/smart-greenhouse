import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-plant-page',
  templateUrl: './create-plant-page.component.html',
  styleUrls: ['./create-plant-page.component.scss']
})
export class CreatePlantPageComponent implements OnInit {
  plantTypes: any[];
  newPlant: any = {
    plantTypeId: null,
    sort: null,
  };

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/plant-types')
      .subscribe(types => {
        this.plantTypes = types;
        if (types.length) {
          this.newPlant.plantTypeId = types[0].id;
        }
      });
  }

  create() {
    this.http.post('/api/plants', this.newPlant)
      .subscribe(res => {
        this.router.navigate(['/', 'plants']);
      });
  }
}
