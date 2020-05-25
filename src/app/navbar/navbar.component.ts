import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  loading = false;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.loggedIn = true;
        return false;
      }
      // this.loggedIn = (user != null);
    });

  }
  public async goHome() {
    if (this.user) {
      this.loading = true;
      setTimeout(async () => {
      this.loading = false;
      await this.signOut();
    }, 1000);
    } else {
      this.loading = true;
      setTimeout(async () => {
      this.loading = false;
      await this.router.navigate(['']);
    }, 1000);
    }
  }

  public async gotoLogin() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['login']);
    }, 1000);
  }
  public async signOut(): Promise<void> {
    this.loading = true;
    setTimeout(async () => {
      this.loading = false;
      this.authService.signOut();
      await this.router.navigate(['']);
    }, 1000);
    this.loggedIn = false;
  }


}



