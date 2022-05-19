import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  readonly api_url = 'http://localhost:8000'
  constructor(private _http: HttpClient) { }

  uploadData(data: any){
    return this._http.post(`${this.api_url}/v1/auth/register`,data).pipe(
      // retry(2),
      // catchError(this.handleError)
    )
  }
}
