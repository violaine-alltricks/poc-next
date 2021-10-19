import { People } from '../People';
import { PeopleGateway } from '../PeopleGateway';

import { v4 as uuid } from 'uuid';

const names: string[] = [
  'Aurélien',
  'Corentin',
  'Cyril',
  'Elsa',
  'Guillaume',
  'Julien',
  'Lionel',
  'Lucas',
  'Maxime',
  'Philippe',
  'Pier',
  'Pierrick',
  'Sébastien',
  'Sébastien',
  'Simon',
  'Stan',
  'Valentin',
  'Vincent',
  'Violaine',
  'Zak',
];

export class InMemoryPeopleGateway implements PeopleGateway {
  private peoples: Map<string, People> = new Map();

  constructor() {
    names.forEach((name: string) => {
      const id = uuid();
      this.peoples.set(id, { name, id });
    });
  }

  async fetchPeoples(): Promise<People[]> {
    const peoples: People[] = Array.from(this.peoples, ([_, people]) => people);

    await new Promise((r) => setTimeout(r, 1000));

    return peoples;
  }

  async addPeople(people: Omit<People, 'id'>): Promise<People> {
    const newPeople = { ...people, id: uuid() };

    this.peoples.set(newPeople.id, newPeople);

    await new Promise((r) => setTimeout(r, 1000));

    return newPeople;
  }

  async editPeople(people: People): Promise<People> {
    this.peoples.set(people.id, people);

    await new Promise((r) => setTimeout(r, 1000));

    return people;
  }

  async removePeople(id: string): Promise<void> {
    this.peoples.delete(id);

    new Promise((r) => setTimeout(r, 1000));
  }
}
