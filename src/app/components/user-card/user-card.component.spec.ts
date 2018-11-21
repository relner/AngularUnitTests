import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  //My Imports
  let userService: UserService;
  let spy: jasmine.Spy;
  let mockUser;

  let mockListUsers;
  let secondSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      providers: [UserService], //add provider UserService
      imports: [HttpClientModule] //add HttpClientModule
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;

    //-------Create Spy with One User---------
    mockUser = { name: 'Kris' }
    userService = fixture.debugElement.injector.get(UserService) //get user service
    spy = spyOn(userService, 'getOne').and.returnValue(of(mockUser));


    //-------Create Spy with List of User---------
    mockListUsers = [{ name: 'Kris' }, { name: 'mike' }, { name: 'jane' }];
    secondSpy = spyOn(userService, 'getAll').and.returnValue(of(mockListUsers));
    

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
    component.someMethod();
    expect(spy.calls.any()).toBeTruthy();
  });
  
  it('should set user name', () => {
    component.someMethod();
    expect(component.user.name).toEqual('Kris');
  });

  it('should set user', () => {
    component.someMethod();
    expect(component.user).toEqual(mockUser);
  });

  it('should call userService', () => {
    component.someSecondMethod();
    expect(secondSpy.calls.any()).toBeTruthy();
  });

});
