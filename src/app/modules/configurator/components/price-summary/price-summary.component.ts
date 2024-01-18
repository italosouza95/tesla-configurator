import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-price-summary',
  templateUrl: './price-summary.component.html',
  styleUrl: './price-summary.component.scss'
})
export class PriceSummaryComponent implements OnInit {
  summary!: Car | null;

  constructor(private _carsService: CarsService) { }

  ngOnInit(): void {
    this.getPriceSummary();
  }

  getPriceSummary() {
    this._carsService.getSummary().subscribe((summary) => {
      this.summary = summary;
      this.summary!.totalPrice = this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): number {
    const totalPrice =
      (this.summary?.model.colors[0].price ?? 0) +
      (this.summary?.configuration.configs[0]?.price ?? 0) +
      (this.summary?.configuration.towHitchPurchased ? 1000 : 0) +
      (this.summary?.configuration.yokePurchased ? 1000 : 0);

    return totalPrice;
  }
}


