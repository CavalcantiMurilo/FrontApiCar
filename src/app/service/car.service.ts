import { Injectable } from '@angular/core';
import { ICar } from '../model/ICar';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly baseApi: string = "http://127.0.0.1:8080/api/cars";

  constructor(private http: HttpClient, private router: Router) { }

  list() {
    return this.http.get<ICar[]>(this.baseApi);
  }
  listById(id: number) {
    return this.http.get<ICar[]>(`${this.baseApi}/${id}`);
  }

  save(record: ICar){
    return this.http.post<ICar>(this.baseApi, record);
  }

  delete(id: number){
    return this.http.delete(`${this.baseApi}/${id}`);
  }

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      location.reload()
    });
  }

}
