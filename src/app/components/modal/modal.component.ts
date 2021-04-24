import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animations } from 'src/app/shared/Animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [Animations.fade, Animations.fadeStatic]
})
export class ModalComponent {

  @Output() closing = new EventEmitter();

  close(): void{
    this.closing.emit();
  }

}
