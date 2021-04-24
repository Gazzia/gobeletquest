import { Animations } from 'src/app/shared/Animations';
import { PlayerService } from './../../shared/services/player.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/Player';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [Animations.fade],
})
export class CreateComponent implements OnInit {
  players: Player[];
  modalOpen = false;
  constructor(private router: Router, private playerService: PlayerService) {
    this.players = playerService.getPlayers();
  }

  ngOnInit(): void {}

  startGame(): void {
    this.router.navigate(['game']);
  }
  startGame2(): void {
    this.modalOpen = true;
  }
}
