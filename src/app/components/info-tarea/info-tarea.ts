import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TodoService } from '../../services/todo-service';
import { UsuarioService } from '../../services/usuario-service';
import { Todo } from '../../interfaces/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-tarea',
  templateUrl: './info-tarea.html',
  styleUrls: ['./info-tarea.css'],
  imports: [CommonModule, RouterLink],
})
export class InfoTarea implements OnInit {
  tareaId!: number;
  tarea: Todo | null = null;
  nombreUsuario: string = '';

  constructor(
    private service: TodoService,
    private route: ActivatedRoute,
    private serviceUsuario: UsuarioService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) return;

    this.tareaId = +idParam;

    // Obtenemos la tarea
    this.service.getTodoById(this.tareaId).subscribe((data: Todo) => {
      this.tarea = data;
      this.cargarNombreUsuario(this.tarea.userId);
      console.log(this.tarea);
    });
  }

  cargarNombreUsuario(userId: number) {
    this.serviceUsuario.getUsuarioById(userId).subscribe((user) => {
      this.nombreUsuario = user.name;
    });
  }
}
