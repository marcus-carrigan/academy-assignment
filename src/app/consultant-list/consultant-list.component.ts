import { Component, OnInit } from '@angular/core';

import { ConsultantApiService } from '../consultant-api.service';
import { Consultant } from '../consultant';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {

  consultants: Consultant[] = [];

  constructor(private consultantApiService: ConsultantApiService) { }

  ngOnInit() {
    this.getConsultants();
  }

  getConsultants(): void {
    this.consultantApiService.getConsultants()
      .subscribe(consultants => this.consultants = consultants);
  }

}
