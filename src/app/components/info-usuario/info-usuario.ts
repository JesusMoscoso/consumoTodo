import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-usuario',
  imports: [CommonModule],
  templateUrl: './info-usuario.html',
  styleUrl: './info-usuario.css',
})
export class InfoUsuario implements OnInit {

  usuarioId!: number;
  
  constructor(private service: UsuarioService, private route: ActivatedRoute) {}

  usuario:User | null = null;

  ngOnInit(): void {
    
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;

    this.service.getUsuarioById(this.usuarioId).subscribe((data: User) => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }


}
