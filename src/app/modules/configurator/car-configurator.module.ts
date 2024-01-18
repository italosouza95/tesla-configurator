import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ConfiguratorRoutingModule } from './car-configurator-routing.module';
import { CarConfiguratorComponent } from './car-configurator.component';
import { ModelSelectorComponent } from './components/car-model-selector/model-selector.component';
import { EngineConfiguratorComponent } from './components/engine-configurator/engine-configurator.component';
import { PhotoDisplayComponent } from './components/photo-display/photo-display.component';
import { PriceSummaryComponent } from './components/price-summary/price-summary.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CarsService } from './services/cars.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    EngineConfiguratorComponent,
    PhotoDisplayComponent,
    StepperComponent,
    PriceSummaryComponent,
    ModelSelectorComponent,
    CarConfiguratorComponent
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [CarsService]
})
export class CarConfiguratorModule { }
