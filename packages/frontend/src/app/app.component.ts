import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from "./app.service";
import { catchError, of, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  message = 'Loading ...';

  private $onDestroy = new Subject<void>();

  constructor(
    private readonly appService: AppService
  ) {}

  ngOnInit() {
    this.appService.getHello().pipe(
      takeUntil(this.$onDestroy),
      catchError(() => of('An error occurred'))
    ).subscribe(message => this.message = message);
  }

  ngOnDestroy() {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }
}
