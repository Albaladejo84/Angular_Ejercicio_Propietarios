import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietariosRoutingModule } from './propietarios-routing.module';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioComponent } from './propietarios/propietario/propietario.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PropietariosComponent, PropietarioComponent, FormularioComponent],
  imports: [
    CommonModule,
    PropietariosRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropietariosModule { }
