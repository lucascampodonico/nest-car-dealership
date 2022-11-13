import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { editCarDto } from './dto/edit-car.dto';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla' 
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic' 
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee' 
        },
    ];


    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {
        
        const car = this.cars.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }

    createCar(car: CreateCarDto){
        return this.cars.push({
            id: uuid(),
            ...car
        })
    }
    editCar(id: string, car: editCarDto){
        
        return {
            id,
            ...car
        }
    }

}
