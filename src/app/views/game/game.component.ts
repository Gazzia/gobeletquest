import { PlayerService } from './../../shared/services/player.service';
import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/shared/Animations';
import { Player } from 'src/app/shared/models/Player';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [Animations.slideLeftFadeIn, Animations.fade],
})
export class GameComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) {
    this.players = playerService.getPlayers();
    playerService.playerChanged.subscribe((players) => {
      this.players = players;
    });
  }

  ngOnInit(): void {}
}
