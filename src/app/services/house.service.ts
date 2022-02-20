import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {House} from "../model/house";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class HouseService {

  constructor(private http: HttpClient) {
  }

  private url = "http://localhost:8080/house";

  getHouses(street?: string, district?: string): Observable<House[]> {
    let params = new HttpParams();
    if(street) {
      params = params.set('street', street);
    }
    if(district) {
      params = params.set('district', district);
    }
    return this.http.get<House[]>(this.url, {params});
  }

  addHouse(house: House): Observable<House> {
    return this.http.post<House>(`${this.url}`, house);
  }

  deleteHouse(street: string, houseNumber: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${street}/${houseNumber}`);
  }

  updateHouse(street: string, houseNumber: number, house: House): Observable<House> {
    return this.http.put<House>(`${this.url}/${street}/${houseNumber}`, house);
  }
}
