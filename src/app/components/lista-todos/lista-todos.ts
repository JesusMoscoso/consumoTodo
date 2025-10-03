import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../interfaces/todo';
import { RouterLink } from '@angular/router';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-lista-todos',
  imports: [RouterLink,CommonModule],
  templateUrl: './lista-todos.html',
  styleUrl: './lista-todos.css',
})
export class ListaTodos implements OnInit {
  constructor(private service: TodoService) {}

  tareas: Todo[] = [];

  ngOnInit(): void {
    this.service.getTodos().subscribe((data: Todo[]) => {
      this.tareas = data;
      console.log(this.tareas);
    });
  }
}
