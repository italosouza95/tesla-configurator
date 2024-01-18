import { Component, Input } from '@angular/core';
import { Model } from '../../../../models/model';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrl: './photo-display.component.scss'
})
export class PhotoDisplayComponent {
  @Input({ required: true }) model!: Model;
}
