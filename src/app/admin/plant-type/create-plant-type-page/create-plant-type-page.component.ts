import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-plant-type-page',
  templateUrl: './create-plant-type-page.component.html',
  styleUrls: ['./create-plant-type-page.component.scss']
})
export class CreatePlantTypePageComponent implements OnInit {
  families: any[];
  newPlantType: any = {
    familyId: null,
    title: null,
  };

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/families')
      .subscribe(families => {
        this.families = families;
        if (families.length) {
          this.newPlantType.familyId = families[0].id;
        }
      });
  }

  create() {
    this.http.post('/api/plant-types', this.newPlantType)
      .subscribe(res => {
        this.router.navigate(['/', 'admin-panel', 'plant-types']);
      });
  }
}
