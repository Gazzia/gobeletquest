import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/shared/Animations';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [Animations.slideLeftFadeIn, Animations.fade]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
