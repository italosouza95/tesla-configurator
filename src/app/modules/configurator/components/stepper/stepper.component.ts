import { Component, Input } from '@angular/core';

export interface StepConfiguration {
  id: string,
  name: string,
  canActivate: boolean,
  route: string,
  childComponentTitle: string,
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input({ required: true }) configuration!: StepConfiguration;
}
