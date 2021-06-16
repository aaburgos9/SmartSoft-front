import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacturaService } from '../Core/Servicio/factura.service';
import { ClienteService } from '../Core/Servicio/cliente.service';
import { ProductoService } from '../Core/Servicio/producto.service';
import Swal from 'sweetalert2';
import { ClienteModel } from '../Core/model/cliente';
import { ProductoModel } from '../Core/model/producto';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  form: any;
  listCliente: ClienteModel[] = [];
  listproducto: ProductoModel[] = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private facturaService: FacturaService,
    private clienteService: ClienteService,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cliente: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      Producto: new FormControl('', Validators.required),
      Cantidad: new FormControl('', Validators.required),
      Precio: new FormControl('', Validators.required)

    });
  }
  onSubmit() {
    this.facturaService.save(this.form.value).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Evento guardado con exito!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/admin/evento/lista']);
    });


  }
  ListarClientes() {
    this.clienteService.listaCliente().subscribe(data => {
      this.listCliente = data;
    });

  }
  ListarProdcuto() {
    this.productoService.listaProducto().subscribe(data => {
      this.listproducto = data;
    });

  }

  agregarCliente() {
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      telfono: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)

    });
    Swal.fire({
      icon: 'success',
      title: 'Cliente guardado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
    window.location.reload();
  }

  agregarProducto(){
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      telfono: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)

    });

    Swal.fire({
      icon: 'success',
      title: 'Producto guardado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
    window.location.reload();
  }
}
