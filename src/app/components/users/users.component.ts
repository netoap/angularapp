import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Alexander',
        lastName: 'Pinheiro',
        age: 70,
        address: {
          street: '50 Main st',
          cp: '28901',
          city: 'Madrid'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 27,
        address: {
          street: '32 Main st',
          cp: '28902',
          city: 'Barcelona'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00')

      },
      {
        firstName: 'Pedro',
        lastName: 'Santos',
        age: 23,
        address: {
          street: '21 Main st',
          cp: '2893',
          city: 'Valencia'
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00')
      }
    ];
    this.loaded = true;

    /* this.addUser({
       firstName: 'Marcio',
       lastName: 'Neto'
     });

     */
  }

  addUser(user: User) {
    this.users.push(user);
  }



}
