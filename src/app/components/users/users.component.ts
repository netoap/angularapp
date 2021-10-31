import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users!: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {
  }

  ngOnInit(): void {
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
    this.loaded = true;
  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if(!valid){
      console.log("Is not valid");
    }else{
      value.isActive = true;
      value.registered = new Date();
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
