import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _formSubject$ = new BehaviorSubject<FormGroup | null>(null);

  getForm$(): Observable<FormGroup | null> {
    return this._formSubject$.asObservable();
  }

  setForm(form: FormGroup) {
    this._formSubject$.next(form);
  }

}
