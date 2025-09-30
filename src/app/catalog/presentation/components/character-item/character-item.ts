import {Component, input} from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent, MatCardFooter,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import {Character} from '../../../domain/model/character.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
@Component({
  selector: 'app-character-item',
  imports: [
    MatCard,
    MatCardTitleGroup,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    TranslatePipe,
    DatePipe,
    MatCardFooter,
    MatButton
  ],
  templateUrl: './character-item.html',
  standalone: true,
  styleUrl: './character-item.css'
})
export class CharacterItem {
  character = input.required<Character>();

}
