import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../objects/user';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  public user: User;
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.user = new User();
  }
  public prev() {
    this.router.navigate(
      ['/first-part']
    );
  }

}
