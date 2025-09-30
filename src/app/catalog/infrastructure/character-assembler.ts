import {CharacterResource, CharacterResponse} from './character-response';
import {Character} from '../domain/model/character.entity';

export class CharacterAssembler {
  static toEntityFromResource(resource: CharacterResource): Character {
    return {
      id: resource.id,
      name: resource.name,
      status: resource.status,
      species: resource.species,
      type: resource.type,
      gender: resource.gender,
      image: resource.image,
      url: resource.url,
      created: resource.created,
    }
  }

  static toEntitiesFormResponse(response: CharacterResponse): Character[]{
    return response.results.map(character => this.toEntityFromResource(character))
  }
}
