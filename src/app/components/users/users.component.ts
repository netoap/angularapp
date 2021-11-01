import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/User";
import {DataService} from "../../services/data.service";

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
  //enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe(users => {
      this.users = users
      this.loaded = true;
    });

  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log("Is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
}
