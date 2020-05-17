import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-family-page',
  templateUrl: './create-family-page.component.html',
  styleUrls: ['./create-family-page.component.scss']
})
export class CreateFamilyPageComponent implements OnInit {
  newFamily = {
    title: null
  };

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
  }


  create() {
    this.http.post('/api/families', this.newFamily)
      .subscribe(res => {
        this.router.navigate(['/', 'admin-panel', 'families']);
      });
  }
}
