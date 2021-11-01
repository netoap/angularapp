import {Injectable} from '@angular/core';
import {User} from "../models/User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>;

  constructor() {

    this.users = [
      {
        firstName: 'Alex',
        lastName: 'Zickler',
        email: 'alex@xpto.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@xpto.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Pedro',
        lastName: 'Santos',
        email: 'pedro@xpto.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'Alex'});
      }, 4000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    console.log('User Added...');
    this.users.unshift(user);
  }
}
