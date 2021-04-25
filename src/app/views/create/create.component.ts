import { Animations } from 'src/app/shared/Animations';
import { PlayerService } from './../../shared/services/player.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/Player';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [Animations.fade, Animations.slideOpen],
})
export class CreateComponent implements OnInit {
  players: Player[];
  modalOpen = false;
  playerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    class: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private playerService: PlayerService) {
    this.players = playerService.getPlayers();
    playerService.playerChanged.subscribe((players) => {
      this.players = players;
    });
  }

  ngOnInit(): void {}

  startGame(): void {
    if (this.players.length > 0) {
      this.router.navigate(['game']);
    }
  }
  openPlayerForm(): void {
    this.playerForm.reset();
    this.playerForm.get('class')?.setValue('');
    this.modalOpen = true;
  }
  addPlayer(): void {
    const id = nanoid();
    if (this.playerForm.valid) {
      const newPlayer = {
        id,
        name: this.playerForm.get('name')?.value,
        class: this.playerForm.get('class')?.value,
        inventory: [],
        location: null,
      };
      this.playerService.addPlayer(newPlayer);
      this.modalOpen = false;
    }
  }
}
