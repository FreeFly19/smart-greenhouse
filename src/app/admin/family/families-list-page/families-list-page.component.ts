import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-families-list-page',
  templateUrl: './families-list-page.component.html',
  styleUrls: ['./families-list-page.component.scss']
})
export class FamiliesListPageComponent implements OnInit {
  families: any[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>('/api/families')
      .subscribe(families => this.families = families);
  }

}
