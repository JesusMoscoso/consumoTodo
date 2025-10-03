import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos-service';
import { Foto } from '../../interfaces/foto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fotos',
  imports: [CommonModule],
  templateUrl: './fotos.html',
  styleUrl: './fotos.css',
})
export class Fotos implements OnInit {
  constructor(private service: FotosService) {}

  fotos: Foto[] = [];

  ngOnInit(): void {
    this.service.getFotos().subscribe((data: Foto[]) => {
      this.fotos = data;
      console.log(this.fotos);
    });
  }
}
