import { Injectable } from '@angular/core';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Player[] = [];

  constructor() {
  }

  getPlayers(): Player[]{
    return this.players;
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }
}
