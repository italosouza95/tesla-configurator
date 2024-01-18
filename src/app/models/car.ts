import { Configuration } from './configuration';
import { Model } from "./model"

export interface Car {
    model: Model;
    configuration: Configuration;
    totalPrice: number;
}