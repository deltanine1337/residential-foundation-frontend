import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {District} from "../../../model/district";
import {DistrictService} from "../../../services/district.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-district-modal',
  templateUrl: './district-modal.component.html',
  styleUrls: ['./district-modal.component.scss']
})
export class DistrictModalComponent implements OnInit {
  @Output() emitLoadDistricts: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitCloseModal: EventEmitter<any> = new EventEmitter<any>();

  isUpdate: boolean;
  selectedDistrict = new District(0, '');

  constructor(private districtService: DistrictService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public updateDistrict(): void {
    this.districtService.updateDistrict(this.selectedDistrict.districtId, this.selectedDistrict).subscribe(
      () => this.emitLoadDistricts.emit(),
      (error) => console.error(error)
    );
  }

  public addDistrict(): void {
    this.districtService.addDistrict(this.selectedDistrict).subscribe(
      () => this.emitLoadDistricts.emit(),
      (error) => console.error(error)
    );
  }

  public onClose() {
    this.emitCloseModal.emit();
  }
}
