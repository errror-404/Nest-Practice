import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      barnd: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      barnd: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      barnd: 'Ford',
      model: 'Fiesta',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }
}
