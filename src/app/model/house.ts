import {District} from "./district";

export class House {
  houseId: any;
  numberOfApartments: number;
  numberOfFloors: number;
  numberOfEntraces: number;
  districtDto: District;

  constructor(houseId: any, numberOfApartments: number, numberOfFloors: number, numberOfEntraces: number,
              district: District){
    this.houseId = houseId;
    this.numberOfApartments = numberOfApartments;
    this.numberOfFloors = numberOfFloors;
    this.numberOfEntraces = numberOfEntraces;
    this.districtDto = district;
  }
}
