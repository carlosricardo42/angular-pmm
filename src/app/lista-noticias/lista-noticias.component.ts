import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Noticia, NoticiaService }  from '../noticia.service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
  noticias$: Observable<Noticia[]>;
  private selectedId: number;

  constructor(private service: NoticiaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.noticias$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getNoticias();
      })
    );
  }
}
