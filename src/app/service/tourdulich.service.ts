import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable,retry, throwError } from 'rxjs';
import { Tour } from '../interface/tour';

@Injectable({
  providedIn: 'root'
})
export class TourdulichService {
  url:string="../assets/data/tour.json"
  constructor(private _http:HttpClient) { }
  getDataTour():Observable<Tour[]>{
  return this._http.get<Tour[]>(this.url)
  .pipe(
    retry(2),catchError(this.handleError)
    )
}
handleError(err:HttpErrorResponse){
  return throwError(()=>new Error(err.message)
  )}
  }
  
