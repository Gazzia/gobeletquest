import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/shared/Animations';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.fade]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(path: string): void{
    this.router.navigate([path]);
  }

}
