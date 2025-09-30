import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Character} from '../domain/model/character.entity';
import {CharacterResponse} from './character-response';
import {CharacterAssembler} from './character-assembler';

@Injectable({
  providedIn: 'root'
})
export class RickyApi {
  private baseUrl = environment.rickyProviderApiBaseUrl;
  private charactersEndpointPath = environment.charactersEndpointPath;
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<CharacterResponse>(`${this.baseUrl}${this.charactersEndpointPath}`)
      .pipe(map(response =>
        CharacterAssembler.toEntitiesFormResponse(response)
      ));
  }
}
