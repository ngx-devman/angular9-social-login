import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public username: string;
  public password: string;
  user: SocialUser;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {}

}

