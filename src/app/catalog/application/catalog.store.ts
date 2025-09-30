import {computed, inject, Injectable, signal} from '@angular/core';
import {Character} from '../domain/model/character.entity';
import {RickyApi} from '../infrastructure/ricky-api';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {
  private characterSignal = signal<Character[]>([]);
  private rickyApi = inject(RickyApi);
  readonly characters = computed(() =>this.characterSignal());

  loadCharacters() {
    if (this.characterSignal().length === 0) {
      this.rickyApi.getCharacters().subscribe(characters => {
        this.characterSignal.set(characters);
      });
    }
  }
}
