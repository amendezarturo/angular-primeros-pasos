import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service.ts.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private DbzService: DbzService ) {}

    get characters(): Character[] {
      return [...this.DbzService.characters];
    }

    onDeleteCharacter( id:string ): void {
      this.DbzService.deleteCharacterById( id );
    }

    onNewCharacter( character: Character ): void {
      this.DbzService.addCharacter( character );
    }
}
