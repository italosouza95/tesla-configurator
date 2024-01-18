import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule],
})

export class AppComponent {

  constructor(private _router: Router) {
    this._router.navigate(['configurator']);
  }

}
