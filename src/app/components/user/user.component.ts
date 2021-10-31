import {Component, OnInit} from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  // properties
  user!: User;

  // Methods
  constructor() {
  }

  ngOnInit(): void {
    this.user = {
      firstName: 'Alexander',
      lastName: 'Pinheiro',
      age: 30,
      address: {
        street: '50 Main st',
        cp: '28901',
        city: 'Madrid'
      }
    }
  }
}



