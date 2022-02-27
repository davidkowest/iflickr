import { Component, OnInit } from '@angular/core';
import { ImagenService } from '../imagen.service';
import { Imagenes } from '../imagenes/imagenes.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tutorial: Imagenes = {
    titulo: '',
    descripcion: '',
    publicado: false
  };
  submitted = false;

  constructor(private imagenService: ImagenService) { }

  ngOnInit(): void {
  }
  guardarTutorial(): void {
    const data = {
      titulo: this.tutorial.titulo,
      descripcion: this.tutorial.descripcion  
    };

    this.imagenService.crearTutorial(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  nuevoTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      titulo: '',
      descripcion: '',
      publicado: false
    };
  }
}
