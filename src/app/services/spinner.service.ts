import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  //subject to show or hide spinner
  public loading$ = new Subject<boolean>();

  //next the boolean to show spinner
  show(): void {
    this.loading$.next(true);
  }
  
  hide(): void {
    this.loading$.next(false);
  }
}
