import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Propietario } from '../models/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private endpoint: string = environment.hostControladores + "propietarios";
  constructor(private http: HttpClient) { }

  getPropietarios(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.endpoint);
  }

  getPropietario(id: number): Observable<Propietario> {
    return this.http.get<Propietario>(this.endpoint + "/" + id);
  }

  deletePropietario(id: number): void {
    this.http.delete<Propietario>(this.endpoint + "/" + id).subscribe();
  }

  updatePropietario(propietario: Propietario): Observable<Propietario> {
    const id = propietario.id;
    return this.http.put<Propietario>(this.endpoint + "/" + id, propietario);
  }

  createPropietario(propietario: Propietario): Observable<any> {
    return this.http.post<Propietario>(this.endpoint, propietario);
  }
}
