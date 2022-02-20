import {Component, OnInit, ViewChild} from '@angular/core';
import {DistrictService} from "../../../services/district.service";
import {District} from "../../../model/district";
import {Router} from "@angular/router";
import {DistrictModalComponent} from "../district-modal/district-modal.component";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss']
})
export class DistrictListComponent implements OnInit {
  @ViewChild(DistrictModalComponent)
  districtModalComponent: DistrictModalComponent;
  districts: District[] = [];
  isAdmin = AppComponent.isAdmin;
  isShowModal = true;

  constructor(private districtService: DistrictService) {
  }

  ngOnInit(): void {
    this.loadDistricts();
  }

  public loadDistricts(): void {
    this.districtService.getDistricts().subscribe(
      (items) => this.districts = items,
      (error) => console.error(error)
    );
  }

  public onCreate(): void {
    this.districtModalComponent.isUpdate = false;
    this.districtModalComponent.selectedDistrict = new District(0, '');
  }

  public onEdit(district: District): void {
    this.districtModalComponent.isUpdate = true;
    this.districtModalComponent.selectedDistrict = JSON.parse(JSON.stringify(district));
  }

  public deleteDistrict(id: number): void {
    this.districtService.deleteDistrict(id).subscribe(
      () => this.loadDistricts(),
      (error) => console.error(error)
    );
  }


  public onCloseModal() {
    this.forceUpdateShowModal();
  }

  onUpdateDistricts() {
    this.forceUpdateShowModal();
    this.loadDistricts();
  }

  private forceUpdateShowModal() {
    this.isShowModal = false;
    setTimeout(() => this.isShowModal = true, 5)
  }
}
