import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  sum(a: number, b: number): number {
    return a + b;
  }

  sumAsync(a: number, b: number): Promise<number>{
    return new Promise(resolve => {
      setTimeout(_ => {
        resolve(a + b);
      }, 3000)
    })
  }

  sumAsyncObs(a: number, b: number): Observable<number>{
    return Observable.create(observer => {
      setTimeout(_ => {
        observer.next(a + b)
      }, 3000)
    })
  }
}
