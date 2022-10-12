import { HttpClient } from '@angular/common/http'; //backende istekte bulunup verileri çekeceğiz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl= "https://localhost:5001/api/"  //data başka bir adresten çekiliyorsa o adersin url kısmı kullanılır
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/carsbybrandid?brandid="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorid="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycolorandbybrand?colorid="+colorId+ "&brandid=" +brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  carAdd(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  getByCarId(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carid="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  }


}
