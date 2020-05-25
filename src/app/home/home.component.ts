import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTerm: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToSearch() {
    this.router.navigateByUrl('/document-user-list/' + this.searchTerm);
  }

}
