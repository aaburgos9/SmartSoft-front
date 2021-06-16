import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '../Core/Servicio/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  form: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productoService: ProductoService,
  ) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required),
        direccion: new FormControl('', Validators.required),
        fecha_nacimiento: new FormControl('', Validators.required),
        telfono: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required)

      });
    }
    onSubmit(){
      this.productoService.save(this.form.value).subscribe( data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto guardado!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/']);
      });

    }
}
