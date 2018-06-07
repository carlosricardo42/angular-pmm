import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  @Input() noticia: Noticia;
 // @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
  }

}
