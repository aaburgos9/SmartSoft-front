import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaModel } from '../model/factura';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  save(Factura: FacturaModel): Observable<any>{
    return this.http.post<FacturaModel>(this.apiUrl + 'factura/registrar/', Factura, httpOptions);
  }

}
