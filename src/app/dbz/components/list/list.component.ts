import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { identity } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  // onDeleteId(index: number): void {
  //  Emitir el índice del personaje
  //   console.log('Índice del personaje', index);
  // };

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    // TODO Emitir el ID del personaje;
    if ( !id ) return;   // console.log({index})
    this.onDelete.emit (id);
  }
}
