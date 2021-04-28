import { Component, OnInit } from '@angular/core';
import { Propietario } from '../models/propietario';
import { PropietarioService } from '../service/propietario.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styles: []
})
export class PropietariosComponent implements OnInit {
  propietarios: Propietario[] = [];

  constructor(private propietarioService: PropietarioService) { }

  ngOnInit() {
    this.cargarPropietarios();
  }
  cargarPropietarios(): void {
    this.propietarioService.getPropietarios().subscribe(response => {
      response.forEach(element => {
        this.propietarios.push(element);
      });
    })
  }
}
