import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    CARS_SEED;
    BRANDS_SEED;
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED);
    return 'Executed seed';
  }
}
