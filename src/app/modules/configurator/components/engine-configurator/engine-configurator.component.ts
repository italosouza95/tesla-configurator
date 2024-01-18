import { ConfigurationDetails } from './../../../../models/configuration';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Configuration } from '../../../../models/configuration';
import { Model } from '../../../../models/model';
import { CarsService } from '../../services/cars.service';
import { FormService } from '../../services/form.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-engine-configurator',
  templateUrl: './engine-configurator.component.html',
  styleUrl: './engine-configurator.component.scss'
})
export class EngineConfiguratorComponent implements OnInit {
  configurations!: Configuration;
  configurationSelected!: ConfigurationDetails;
  configurationsOptions!: ConfigurationDetails[];
  configurationControl!: FormControl;

  constructor(private _carService: CarsService, private _formService: FormService) { }

  ngOnInit(): void {
    this._carService.modelSelected$().subscribe((model) => {
      if (model !== null)
        this.getConfiguration({ code: model.code });

      this._formService.getForm$().subscribe(async (form) => {
        const configurationForm = form?.get('configuration')?.value['configs'];
        if (form) {
          if (configurationForm[0].id) {
            await this.getConfiguration({ code: form.get('model')!.value['code'] });
            this.configurations = form?.get('configuration')?.value;
            this.configurationControl = new FormControl(this.configurationsOptions.find((c: ConfigurationDetails) => c.id === configurationForm[0]!.id));
            this.configurationSelected = this.configurationControl.value;
          }
        }

      });
    });
  }

  configurationOptionSelected(event: MatSelectChange) {
    this.configurations.configs = [event.value];
    this.configurationSelected = event.value;
    this._carService.selectConfiguration(this.configurations);
  }

  async getConfiguration(modelCode: Pick<Model, 'code'>): Promise<void> {
    const configurations = await this._carService.getAllConfiguration(modelCode.code).toPromise();
    this.configurations = configurations!;
    this.configurationsOptions = [...configurations!.configs];
  }

  towHitchOptionSelected(event: MatCheckboxChange) {
    this.configurations.towHitchPurchased = event.checked;
    this._carService.selectConfiguration(this.configurations);
  }

  yokeOptionSelected(event: MatCheckboxChange) {
    this.configurations.yokePurchased = event.checked;
    this._carService.selectConfiguration(this.configurations);
  }

}
