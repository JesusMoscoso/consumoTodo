import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  //url para la lista de tareas
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  // Inyección de dependencia de HttpClient
  constructor(private http: HttpClient) {}

  // Obtener todas las tareas
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // Obtener una tarea por ID
  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }
}
