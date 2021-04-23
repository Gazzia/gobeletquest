import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() player = {
    id: 1,
    name: 'Joseph',
    location: "Désert - Temple"
  };

  @Input() isTurn = false;
  constructor() {}

  ngOnInit(): void {}
}
