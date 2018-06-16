import { Component, OnInit, Input } from '@angular/core';
import { Noticia, NoticiaService }  from '../noticia.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {
  @Input()
  noticia: Noticia;
  noticiaId: number;
  noticia$: Observable<Noticia>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: NoticiaService) {
  }

  ngOnInit() {
    this.noticia$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getNoticia(params.get('id')))
    );
  }

  gotoNoticias(noticia: Noticia) {
    let noticiaId = noticia ? noticia.id : null;
    this.router.navigate(['/noticias', { id: noticiaId}]);
  }
}
