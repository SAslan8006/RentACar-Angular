import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:5001/api/"
  constructor(private httpClient: HttpClient) { }

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "CarImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }




}
