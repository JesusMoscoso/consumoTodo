import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { User } from '../../interfaces/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  imports: [RouterLink],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {
  constructor(private service: UsuarioService) {}

  usuarios: User[] = [];

  ngOnInit(): void {
    //Lógica para obtener la lista de usuarios
    this.service.getUsuarios().subscribe((data: User[]) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }


}
