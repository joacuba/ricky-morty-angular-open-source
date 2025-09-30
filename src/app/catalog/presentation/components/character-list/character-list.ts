import {Component, input} from '@angular/core';
import {Character} from '../../../domain/model/character.entity';
import {CharacterItem} from '../character-item/character-item';

@Component({
  selector: 'app-character-list',
  imports: [
    CharacterItem
  ],
  templateUrl: './character-list.html',
  standalone: true,
  styleUrl: './character-list.css'
})
export class CharacterList {
  characters = input.required<Array<Character>>();
}
