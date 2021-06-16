import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from '../model/cliente';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  save(cliente: ClienteModel): Observable<any>{
    return this.http.post<ClienteModel>(this.apiUrl + 'cliente/registrar/', cliente, httpOptions);
  }

  listaCliente(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(this.apiUrl + 'cliente/', httpOptions);
  }


}
