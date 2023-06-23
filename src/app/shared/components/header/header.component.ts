import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  nav = [
    {
      routeName: 'Navbar',
      routePath: '/',
    },
    {
      routeName: 'Home',
      routePath: '/',
    },
    {
      routeName: 'counter',
      routePath: '/counter',
    },
    {
      routeName: 'post',
      routePath: '/posts',
    },
    {
      routeName: 'login',
      routePath: 'auth'
    },
    {
      routeName: 'signup',
      routePath: '/auth/signup'
    }
  ]

}
