import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroEmpleadoService } from '../registro-empleado.service';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {
  empleados: any[] = [];
  requestForm!: FormGroup;
  constructor(
    private empleadoService: RegistroEmpleadoService,
    private formBuilder: FormBuilder
  ) {
    this.requestForm = this.formBuilder.group({
      id:[],
      identificacion: [],
      tipo_identificacion: [],
      pmr_nombre: [],
      sgd_nombre: [],
      pmr_apellido: [],
      sgd_apellido: [],
      area: [],
      email: [],
      pais_empleo: [],
      fechaIngreso: [],
      fechaRetiro: [],
      estado: ["activo"]
    })
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.empleadoService.getAll()
      .subscribe((empleado: any) => {
        console.log('empleado', empleado);
        this.empleados = empleado;
      })
  }
  SendForm(): void {
    console.log(this.requestForm);
  }
  save() {
    const values = this.requestForm.value;
    console.log('values', values);
    this.empleadoService.create(values)
      .subscribe(() => {
        this.getAll();
      })
  }
  delete(empleado: any) {
    const ok = confirm('¿Estás seguro de eliminar este registro?');
    if (ok) {
      this.empleadoService.delete(empleado)
        .subscribe(() => {
          this.getAll();
        })
      }
    }
  }
