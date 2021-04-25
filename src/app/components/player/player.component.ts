import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() player?: Player;
  @Input() isTurn = false;
  constructor() {}

  ngOnInit(): void {}
}
