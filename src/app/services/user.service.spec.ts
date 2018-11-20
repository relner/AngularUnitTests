import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

import { from } from 'rxjs';

//my Import
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('UserService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule] //Import module
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  //------------ Involved Method ------------------
  it('should get one user - Involved Method', inject([HttpTestingController], (backend: HttpTestingController) => {
    const service: UserService = TestBed.get(UserService);
    const mockUser = { name: 'John' }

    service.getOne(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users/1'
    }).flush(mockUser)

  }));

  // -------------- New Method --------------------
  it('should get one user - New Method', () => {
    const service: UserService = TestBed.get(UserService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const mockUser = { name: 'John' }

    service.getOne(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users/1'
    }).flush(mockUser)

  });

  //------------- Old Method --------------------- 
  it('should get one user - Old Method', inject([UserService, HttpTestingController], (service: UserService, backend: HttpTestingController) => {

    const mockUser = { name: 'John' }

    service.getOne(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users/1'
    }).flush(mockUser)

  }));

  //----------------------Involved Method---------------------------------
  it('should get List of users - Involved Method', inject([HttpTestingController], (backend: HttpTestingController) => {
    const service: UserService = TestBed.get(UserService);
    
    const mockUsers = [{ name: 'John' }, { name: 'Mike' }]

    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users'
    }).flush(mockUsers)

  }));

  // -------------- New Method --------------------
  it('should get List of users - New Method', () => {
    const service: UserService = TestBed.get(UserService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const mockUsers = [{ name: 'John' }, { name: 'Mike' }]

    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users'
    }).flush(mockUsers)

  });

  // -------------- Old Method --------------------
  it('should get List of users - Old Method', inject([UserService, HttpTestingController], (service: UserService, backend: HttpTestingController) => {

    const mockUsers = [{ name: 'John' }, { name: 'Mike' }]

    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users'
    }).flush(mockUsers)

  }));


});
