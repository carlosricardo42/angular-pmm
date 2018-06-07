import { Component, OnInit } from '@angular/core';
import { NOTICIAS } from '../dashboard-noticias';
import { Noticia } from '../noticia';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
  lista_noticias = NOTICIAS;

  constructor() { }

  ngOnInit() {
  }

}
