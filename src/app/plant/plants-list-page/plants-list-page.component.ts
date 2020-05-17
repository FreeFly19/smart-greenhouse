import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plants-list-page',
  templateUrl: './plants-list-page.component.html',
  styleUrls: ['./plants-list-page.component.scss']
})
export class PlantsListPageComponent implements OnInit {
  plants: any[];

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.http.get<any[]>('/api/plants')
      .subscribe(plants => {
        this.plants = plants;
        for (const plant of plants) {
          if (plant.dateOfBirth) {
            plant.dateOfBirth = new Date(plant.dateOfBirth).toLocaleString();
          }
          plant.createdAt = new Date(plant.createdAt).toLocaleString();
        }
      });
  }

}
