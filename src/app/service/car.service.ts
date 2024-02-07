import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly baseApi: string = "http://127.0.0.1:8080/api/cars";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Car[]>(this.baseApi);
  }

  save(record: Car){
    return this.http.post<Car>(this.baseApi, record);
  }

  delete(id: number){
    return this.http.delete(`${this.baseApi}/${id}`);
  }

}
