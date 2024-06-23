import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  APIURL="http://localhost:3000/cahrtData";
  // constructor(private _http:HttpClient) { }
  constructor() { }

  // showData(){
  //   return this._http.get(this.APIURL);
  // }
}
