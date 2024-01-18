import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../../../models/car';
import { Configuration } from '../../../models/configuration';
import { Model } from '../../../models/model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _modelSelected$ = new BehaviorSubject<Model | null>(null);
  private _configurationSelected$ = new BehaviorSubject<Configuration | null>(null);
  private _summary$ = new BehaviorSubject<Car | null>(null);

  constructor(private _http: HttpClient) { }

  configuratioSelected$(): Observable<Configuration | null> {
    return this._configurationSelected$.asObservable();
  }

  selectConfiguration(configuration: Configuration) {
    this._configurationSelected$.next(configuration);
  }

  modelSelected$(): Observable<Model | null> {
    return this._modelSelected$.asObservable();
  }

  selectModel(model: Model | null) {
    this._modelSelected$.next(model);
  }

  getAllModels(): Observable<Model[]> {
    return this._http.get<Model[]>('/models')
  }

  setSummary(summary: Car | null) {
    this._summary$.next(summary);
  }

  getSummary(): Observable<Car | null> {
    return this._summary$.asObservable();
  }

  getAllConfiguration(modelCode: string): Observable<Configuration> {
    return this._http.get<Configuration>(`/options/${modelCode}`);
  }

}
