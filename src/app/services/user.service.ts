import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://localhost:5001/api/"
  constructor(private httpClient: HttpClient) { }


  getByUserEmail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = this.apiUrl + "users/getbyuseremail?email=" + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }


}
