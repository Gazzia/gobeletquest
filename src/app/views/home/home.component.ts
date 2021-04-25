import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animations } from 'src/app/shared/Animations';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.fade],
})
export class HomeComponent implements OnInit {
  canContinue = false;
  constructor(private router: Router, private playerService: PlayerService) {
    this.canContinue = playerService.hasPlayers();
    playerService.playerChanged.subscribe((pls) => {
      this.canContinue = playerService.hasPlayers();
    });
  }

  ngOnInit(): void {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }

  newGame(): void {
    this.playerService.resetPlayers();
    this.goTo('/create');
  }
}
