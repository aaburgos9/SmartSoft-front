import { ClienteModel } from "../model/cliente";
import { ProductoModel } from "../model/producto";
export class FacturaModel {

  constructor(

    public numero_factura?: string,
    public cliente?: ClienteModel,
    public fecha?: string,




  ) { }
}
