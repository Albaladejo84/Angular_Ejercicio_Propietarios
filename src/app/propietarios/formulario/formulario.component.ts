import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propietario } from '../models/propietario';
import { PropietarioImpl } from '../models/propietario-impl';
import { PropietarioService } from '../service/propietario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  propietario: Propietario = new PropietarioImpl();
  constructor(private activateRoute: ActivatedRoute, private propietarioService: PropietarioService) { }

  ngOnInit() {
    this.cargarPropietario();
  }
  cargarPropietario() {
    this.activateRoute.params.subscribe(params => {
      const id = params.id;
      this.propietarioService.getPropietario(id).subscribe(response => {
        this.propietario = response;
      })
    })
  }
  enviarCambios(): void {
    this.propietario.pedidos = null;
    this.propietarioService.updatePropietario(this.propietario).subscribe();
  }

  enviarNuevo(): void {
    this.propietarioService.createPropietario(this.propietario).subscribe();
  }
}
