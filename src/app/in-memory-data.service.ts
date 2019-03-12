import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
		const consultants = [
			{ id: 1, name: 'Sonam Choudhary'},
			{ id: 2, name: 'Robert Daly'},
			{ id: 3, name: 'Alexander Eriksson'},
			{ id: 4, name: 'Linus Eriksson'},
			{ id: 5, name: 'Joy Fajardo'},
			{ id: 6, name: 'Miriam Haile'},
			{ id: 7, name: 'Grigorios Kokkoris'},
			{ id: 8, name: 'Tejaswini Kollu'},
			{ id: 9, name: 'Jungha Lee'},
			{ id: 10, name: 'Irina Minkova'},
			{ id: 11, name: 'Shubham Mittal'},
			{ id: 12, name: 'Junaid Mohsin'},
			{ id: 13, name: 'Daniel Persson'},
			{ id: 14, name: 'Emma Piskator'},
			{ id: 15, name: 'Lucine Shahgholian'},
			{ id: 16, name: 'Anatoli Vahterovs'},
		];
		
		return { consultants };
  }
}
