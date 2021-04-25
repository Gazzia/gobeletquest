import { EventEmitter, Injectable } from '@angular/core';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [];
  playerChanged = new EventEmitter<Player[]>();

  constructor() {
    const storage = localStorage.getItem('players');
    if (storage && storage.length > 2) {
      const js = JSON.parse(storage);
      if (js.length > 0) {
        this.players = js;
      }
    }
  }

  hasPlayers(): boolean{
    return this.players && this.players.length > 0;
  }

  resetPlayers(): void {
    this.players = [];
    this.emitPlayers();
  }

  getPlayers(): Player[] {
    return this.players;
  }

  addPlayer(player: Player): void {
    this.players.push(player);
    this.emitPlayers();
  }

  emitPlayers(): void {
    this.playerChanged.emit(this.players);
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
