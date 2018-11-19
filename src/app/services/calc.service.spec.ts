import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { tick } from '@angular/core/src/render3';

describe('CalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service).toBeTruthy();
  });

  //My Test 1
  it('should returm sum', () => {
    const service: CalcService = TestBed.get(CalcService);
    expect(service.sum(3, 2)).toBe(5);
  });

  //My Test 2
  it('should returm async sum - Promise', fakeAsync(() => {
    const service: CalcService = TestBed.get(CalcService);

    service.sumAsync(3, 2).then(result => {
      expect(result).toBe(5);
    })
    flush(); //remove all async
    //tick(1000); //wate one second 

  }));

  //My Test 3
  it('should returm async sum - Observable', fakeAsync(() => {
    const service: CalcService = TestBed.get(CalcService);

    service.sumAsyncObs(3, 2).subscribe(result => {
      expect(result).toBe(5);
    })
    flush(); //remove all async
  }));

});
