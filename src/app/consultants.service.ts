import { Injectable } from '@angular/core';

import { Consultant } from './consultant'

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  consultants: Consultant[] = [
    new Consultant(1, 'Sonam Choudhary'),
    new Consultant(2, 'Robert Daly'),
    new Consultant(3, 'Alexander Eriksson'),
    new Consultant(4, 'Linus Eriksson'),
    new Consultant(5, 'Joy Fajardo'),
    new Consultant(6, 'Miriam Haile'),
    new Consultant(7, 'Grigorios Kokkoris'),
    new Consultant(8, 'Tejaswini Kollu'),
    new Consultant(9, 'Jungha Lee'),
    new Consultant(10,'Irina Minkova'),
    new Consultant(11,'Shubham Mittal'),
    new Consultant(12,'Junaid Mohsin'),
    new Consultant(13,'Daniel Persson'),
    new Consultant(14,'Emma Piskator'),
    new Consultant(15,'Lucine Shahgholian'),
    new Consultant(16,'Anatoli Vahterovs'),
  ]

  getConsultants(): Consultant[] {
    return this.consultants
  }
}
