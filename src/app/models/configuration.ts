export interface Configuration {
    configs: ConfigurationDetails[],
    towHitch: boolean,
    towHitchPurchased?: boolean,
    yoke: boolean
    yokePurchased?: boolean,
}

export interface ConfigurationDetails {
    id: number,
    description: string,
    range: number,
    speed: number,
    price: number
}