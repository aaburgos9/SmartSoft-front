import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoModel } from '../model/producto';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  save(producto: ProductoModel): Observable<any>{
    return this.http.post<ProductoModel>(this.apiUrl + 'producto/registrar/', producto, httpOptions);
  }

  listaProducto(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(this.apiUrl + 'producto/', httpOptions);
  }


}
