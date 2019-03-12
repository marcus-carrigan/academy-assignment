import { Component, Input } from '@angular/core';


@Component({
  selector: 'consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent {

  @Input() name: string;

}
