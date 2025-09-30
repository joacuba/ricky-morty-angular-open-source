import {Component, inject, OnInit} from '@angular/core';
import {CatalogStore} from '../../../../catalog/application/catalog.store';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {CharacterList} from '../../../../catalog/presentation/components/character-list/character-list';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [
    LanguageSwitcher,
    CharacterList,
    TranslatePipe
  ],
  templateUrl: './layout.html',
  standalone: true,
  styleUrl: './layout.css'
})
export class Layout implements OnInit {
  protected store = inject(CatalogStore);
  protected readonly characters = this.store.characters;

  ngOnInit() {
    this.store.loadCharacters();
  }
}
