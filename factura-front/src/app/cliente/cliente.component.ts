import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from '../Core/Servicio/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
form: any;
constructor(
  private router: Router,
  private fb: FormBuilder,
  private clienteService: ClienteService,
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
    this.clienteService.save(this.form.value).subscribe( data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cliente guardado!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/']);
    });

  }



}

