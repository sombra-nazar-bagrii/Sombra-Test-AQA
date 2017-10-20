import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  public user: User;
  public roleCheckboxes = [
    {
      name: 'USER',
      value: 'ROLE_USER',
      checked: false
    },
    {
      name: 'HR',
      value: 'ROLE_HR',
      checked: false
    },
    {
      name: 'ADMIN',
      value: 'ROLE_ADMIN',
      checked: false
    },
    {
      name: 'PM',
      value: 'ROLE_PM',
      checked: false
    },
    {
      name: 'SALES',
      value: 'ROLE_SALES',
      checked: false
    }
  ];
  constructor(public router: Router) {
    this.user = new User();
  }

  public ngOnInit() {
  }

  public next() {
    this.router.navigate(
      ['/second-part']
    );
  }

  public uploadFile(event) {
    this.user.filePath = event.target.files.length ? event.target.files[0].name : '';
  }

  public roleChanged() {
    this.user.roles = this.roleCheckboxes.filter((item) => item.checked).map((item, index) => {
      return {
        id: index,
        roleType: item.value
      };
    });
  }
}
