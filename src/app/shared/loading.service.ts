import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(true);

  loading$ = this.loadingSubject.asObservable();

  setLoadingState(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}
