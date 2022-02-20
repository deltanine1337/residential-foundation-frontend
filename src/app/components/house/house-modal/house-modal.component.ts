import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HouseService} from "../../../services/house.service";
import {DistrictService} from "../../../services/district.service";
import {House} from "../../../model/house";
import {District} from "../../../model/district";

@Component({
  selector: 'app-house-modal',
  templateUrl: './house-modal.component.html',
  styleUrls: ['./house-modal.component.scss']
})
export class HouseModalComponent implements OnInit {
  @Output() emitCloseModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitLoadHouses: EventEmitter<any> = new EventEmitter<any>();
  isUpdate: boolean;
  selectedHouse = new House(null, 0, 0, 0, new District(0, ''));
  selectedDistrict = new District(0, '');
  streeet: string;
  houseeNumber: number;
  isDistrictChanged: boolean;
  districts: District[] = [];

  constructor(private houseService: HouseService, private districtService: DistrictService) { }

  ngOnInit(): void {
    this.loadDistricts();
  }

  public loadDistricts(): void {
    this.districtService.getDistricts().subscribe(
      (items) => this.districts = items,
      (error) => console.error(error)
    );
  }

  public addHouse(): void {
    this.selectedHouse.houseId = {
      street: this.streeet,
      houseNumber: this.houseeNumber
    };
    this.selectedHouse.districtDto = this.selectedDistrict;
    this.houseService.addHouse(this.selectedHouse).subscribe(
      () => this.emitLoadHouses.emit(),
      (error) => console.error(error)
    );
  }

  public updateHouse(): void {
    this.selectedHouse.districtDto = this.selectedDistrict;
    this.houseService.updateHouse(this.streeet, this.houseeNumber, this.selectedHouse).subscribe(
      () => this.emitLoadHouses.emit(),
      (error) => console.error(error)
    );
  }


  public onChangeSelectDistrict(selectedItem: any) {
    this.selectedDistrict = new District(selectedItem.districtId, selectedItem.districtName);
    this.isDistrictChanged = true;
  }

  public onClose() {
    this.emitCloseModal.emit();
  }
}
