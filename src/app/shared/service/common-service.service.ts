import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  APIURL="http://localhost:3000/cahrtData";
  constructor(private _http:HttpClient) { }

  showData(){
    return this._http.get(this.APIURL);
  }
}
