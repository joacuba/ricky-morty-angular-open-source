export class Character {
  id: number | null;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  created: string;

  constructor() {
    this.id = null
    this.name = '';
    this.status = '';
    this.species = '';
    this.type = '';
    this.gender = '';
    this.image = '';
    this.url = '';
    this.created = '';
  }
}
