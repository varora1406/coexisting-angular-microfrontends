import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "navbar-primary-nav",
  templateUrl: "./primary-nav.component.html",
  styleUrls: ["./primary-nav.component.css"],
})
export class PrimaryNavComponent implements OnInit, OnDestroy {
  private readonly routeSubject = new Subject();
  private routeSubjectSubscription: Subscription;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    const routeCallback = (path) => {
      this.router.navigate([path], {
        queryParams: {
          random: Math.random().toString(36).substring(7),
        },
      });
    };

    this.routeSubjectSubscription = this.routeSubject.subscribe(routeCallback);
  }

  route(path) {
    // Infinite URL loop works better with this
    // this.routeSubject.next(path);

    // Infinite URL loop doesn't work fine
    this.router.navigate([path], {
      queryParams: {
        random: Math.random().toString(36).substring(7),
      },
    });
  }

  ngOnDestroy() {
    this.routeSubjectSubscription.unsubscribe();
  }
}
