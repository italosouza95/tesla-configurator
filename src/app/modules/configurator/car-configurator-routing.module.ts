import { ModelSelectorComponent } from './components/car-model-selector/model-selector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineConfiguratorComponent } from './components/engine-configurator/engine-configurator.component';
import { PriceSummaryComponent } from './components/price-summary/price-summary.component';
import { CarConfiguratorComponent } from './car-configurator.component';

const routes: Routes = [{
  path: '', component: CarConfiguratorComponent,
  children: [
    { path: 'model-selector', component: ModelSelectorComponent },
    { path: 'engine-configurator', component: EngineConfiguratorComponent },
    { path: 'price-summary', component: PriceSummaryComponent },
    { path: '**', redirectTo: 'model-selector' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule { }