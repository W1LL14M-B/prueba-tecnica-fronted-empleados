import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroEmpleadoService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(){
return this.http.get('http://localhost:8080/api/v1/listados');
  }
  create(empleado:any){
    return this.http.post('http://localhost:8080/api/v1/empleado',empleado);
  }
  update(id:number, empleado:any){
    return this.http.put('http://localhost:8080/api/v1/actualizar/'+id,empleado);
  }
  delete(id:number){
    return this.http.delete('http://localhost:8080/api/v1/eliminar/'+id);
  }
}
