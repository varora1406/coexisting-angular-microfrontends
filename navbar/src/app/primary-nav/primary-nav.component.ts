import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  route(path) {
    const random = Math.random().toString(36).substring(7)
    this.router.navigate([path], {
      queryParams: {
        random
      }
    });
  }

}
