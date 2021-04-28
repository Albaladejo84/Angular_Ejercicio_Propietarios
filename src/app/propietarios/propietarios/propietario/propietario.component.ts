import { Component, Input, OnInit } from '@angular/core';
import { Propietario } from '../../models/propietario';
import { PropietarioService } from '../../service/propietario.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styles: []
})
export class PropietarioComponent implements OnInit {
  @Input() propietario: Propietario;

  constructor(private propietarioService: PropietarioService) { }

  ngOnInit() {
  }

  eliminarPropietario(): void {
    const id = this.propietario.id
    this.propietarioService.deletePropietario(this.propietario.id);
  }

}
