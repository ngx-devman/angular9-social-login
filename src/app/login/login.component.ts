import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

const googleLogoURL =
'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public user: SocialUser;
  public loggedIn: boolean;

  constructor(private authService: AuthService, public router: Router, private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }

  ngOnInit() {
      this.user = null;
      this.loggedIn = false;
  }

  public async signInWithGoogle(): Promise<void> {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.loggedIn = true;
        this.router.navigate(['dashboard']);
        return false;
      }
      this.loggedIn = true;
    });
  }

  public async signInWithFB(): Promise<void> {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.loggedIn = true;
        this.router.navigate(['dashboard']);
        return false;
      }
      this.loggedIn = true;
    });
  }
}

