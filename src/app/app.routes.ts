import { Routes } from '@angular/router';

export const routes: Routes =
    [
        { path: 'configurator', loadChildren: () => import('./modules/configurator/car-configurator.module').then(m => m.CarConfiguratorModule) },
        { path: '', redirectTo: 'configurator', pathMatch: 'full' },
        { path: '**', redirectTo: 'configurator', pathMatch: 'full' }
    ];