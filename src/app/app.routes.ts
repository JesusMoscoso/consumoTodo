import { Routes } from '@angular/router';
import { ListaTodos } from './components/lista-todos/lista-todos';
import { ListaUsuarios } from './components/lista-usuarios/lista-usuarios';
import { InfoUsuario } from './components/info-usuario/info-usuario';
import { InfoTarea } from './components/info-tarea/info-tarea';

export const routes: Routes = [
  { path: 'tareas', component: ListaTodos },
  { path: 'usuarios', component: ListaUsuarios },
  { path: 'usuarios/:id', component: InfoUsuario },
  {path: 'tareas/:id', component:InfoTarea },
];
