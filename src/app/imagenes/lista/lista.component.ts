import { Component, OnInit } from '@angular/core';
import { ImagenService } from '../imagen.service';
import { Imagenes } from '../imagenes/imagenes.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tutoriales?: Imagenes[];
  tutorialActual: Imagenes = {};
  indiceActual = -1;
  titulo = '';

  constructor(private imagenService: ImagenService) { }

  ngOnInit(): void {
    this.recuperarTutoriales();
  }
  recuperarTutoriales(): void {
    this.imagenService.getTodosTutoriales()
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refrescarLista(): void {
    this.recuperarTutoriales();
    this.tutorialActual = {};
    this.indiceActual = -1;
  }

  setTutorialActivo(tutorial: Imagenes, indice: number): void {
    this.tutorialActual = tutorial;
    this.indiceActual = indice;
  }

  eliminarTodosTutoriales(): void {
    this.imagenService.eliminarTodosImagenes()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refrescarLista();
        },
        error: (e) => console.error(e)
      });
  }

  buscarTitulo(): void {
    this.tutorialActual = {};
    this.indiceActual = -1;

    this.imagenService.findByTitulo(this.titulo) 
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {

      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);


      PDF.setFontSize(20)
      PDF.text('Noelia apruebame', 50, 130)

      PDF.save('listado-imagenes-davidflickr.pdf');


    });
  }
}
