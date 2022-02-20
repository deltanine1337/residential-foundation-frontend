import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {District} from "../model/district";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class DistrictService {

  constructor(private http: HttpClient) {
  }

  private url = "http://localhost:8080/district";

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>(`${this.url}`);
  }

  addDistrict(district: District): Observable<District> {
    return this.http.post<District>(`${this.url}`, district);
  }

  deleteDistrict(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  updateDistrict(id: number, district: District): Observable<District> {
    return this.http.put<District>(`${this.url}/${id}`, district);
  }
}
