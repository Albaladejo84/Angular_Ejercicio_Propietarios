import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PropietariosComponent } from './propietarios/propietarios.component';


const routes: Routes = [
  {
    path: '',
    component: PropietariosComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'formulario/:id',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosRoutingModule { }
