export interface HarryPotterCharacter {
  id: number;
  name: string;
  alternate_names: [];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: [];
  alive: boolean;
  image: URL;
}
