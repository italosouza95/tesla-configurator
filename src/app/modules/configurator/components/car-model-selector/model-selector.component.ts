import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Color } from '../../../../models/color';
import { Model } from '../../../../models/model';
import { CarsService } from '../../services/cars.service';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'car-model-selector',
  templateUrl: './model-selector.component.html',
  styleUrl: './model-selector.component.scss'
})
export class ModelSelectorComponent implements OnInit {
  modelsOptions!: Model[];
  colorsOptions!: Color[];
  modelAndColorSelected: Model = {} as Model;

  modelControl!: FormControl;
  colorControl!: FormControl;

  constructor(private _carsService: CarsService, private _formService: FormService) { }

  ngOnInit(): void {
    this._carsService.getAllModels().subscribe((models) => {
      this.modelsOptions = models;

      this._formService.getForm$().subscribe((form) => {
        if (form) {
          if (form?.get('model')?.value['code']) {
            this.modelAndColorSelected = form?.get('model')?.value;
            this.colorsOptions = this.modelsOptions.find((c: Model) => c.code === this.modelAndColorSelected.code)!['colors'];

            this.modelControl = new FormControl(this.modelsOptions.find((c: Model) => c.code === this.modelAndColorSelected.code));
            this.colorControl = new FormControl(this.colorsOptions.find((c: Color) => c.code === this.modelAndColorSelected.colors[0].code));
          }
        }
      });
    });

  }

  modelSelected(event: MatSelectChange) {
    this.reset();
    const model = event.value;
    this.colorsOptions = model.colors as Color[];
    this.modelAndColorSelected.code = model.code;
    this.modelAndColorSelected.description = model.description;
  }

  colorSelected(event: MatSelectChange) {

    const color = event.value;
    this.modelAndColorSelected.colors = [color];
    this._carsService.selectModel(this.modelAndColorSelected);
  }

  reset() {
    this.modelAndColorSelected = {} as Model;
    this._carsService.selectModel(null);
  }

}

