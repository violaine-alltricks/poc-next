import { People } from './People';

export interface PeopleGateway {
  fetchPeoples(): Promise<People[]>;
  addPeople(people: Omit<People, 'id'>): Promise<People>;
  editPeople(people: People): Promise<People>;
  removePeople(id: string): Promise<void>;
}
