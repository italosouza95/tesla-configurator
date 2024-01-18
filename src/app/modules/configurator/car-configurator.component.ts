import { Model } from './../../models/model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Configuration } from '../../models/configuration';
import { StepConfiguration } from './components/stepper/stepper.component';
import { CarsService } from './services/cars.service';
import { FormService } from './services/form.service';
@Component({
  selector: 'app-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrl: './car-configurator.component.scss',
})

export class CarConfiguratorComponent implements OnInit {
  stepperConfig: StepConfiguration[] = this.initializeStepper();
  modelSelected: Model | null = null;
  configurationSelected: Configuration | null = null;

  constructor(private formBuilder: FormBuilder, private _carService: CarsService, private _formService: FormService) { }

  form: FormGroup = this.formBuilder.group({
    totalPrice: [Validators.required],
    model: this.formBuilder.group({
      code: [Validators.required],
      description: [Validators.required],
      colors: this.formBuilder.array([this.formBuilder.group({
        code: [Validators.required],
        description: [Validators.required],
        price: [Validators.required]
      })]),
    }),
    configuration: this.formBuilder.group({
      configs: this.formBuilder.array([
        this.formBuilder.group({
          id: [Validators.required],
          description: [Validators.required],
          range: [Validators.required],
          speed: [Validators.required],
          price: [Validators.required],
        })]),
      towHitch: [Validators.required],
      towHitchPurchased: [Validators.required],
      yoke: [Validators.required],
      yokePurchased: [Validators.required]
    })

  });

  ngOnInit(): void {
    this._formService.setForm(this.form);

    this._carService.modelSelected$().subscribe((model) => {
      if (model === null) {
        this.reset();
      } else {
        this.form.get('model')?.patchValue(model);
        this.modelSelected = model;
        this.stepperConfig[1].canActivate = true;
        this._formService.setForm(this.form);
        this._carService.setSummary(this.form.getRawValue());

      }
    });

    this._carService.configuratioSelected$().subscribe((configurations) => {
      if (configurations === null) {
        this.reset();
      } else {
        this.form.get('configuration')?.patchValue(configurations);
        this.configurationSelected = configurations;
        this.stepperConfig[2].canActivate = true;
        this._formService.setForm(this.form);
        this._carService.setSummary(this.form.getRawValue());
      }
    });
  }

  initializeStepper(): StepConfiguration[] {
    return [
      {
        id: 'step1',
        name: 'Step 1',
        canActivate: true,
        route: 'model-selector',
        childComponentTitle: `${name}: Choose your Model and color`,
      },
      {
        id: 'step2',
        name: 'Step 2',
        canActivate: false,
        route: 'engine-configurator',
        childComponentTitle: `${name}: Select your config and options`,
      },
      {
        id: 'step3',
        name: 'Step 3',
        canActivate: false,
        route: 'price-summary',
        childComponentTitle: `${name}: Summary`,
      }
    ];
  }

  reset() {
    this.modelSelected = null;
    this.form.reset();
    this.stepperConfig = this.initializeStepper();
  }
}
