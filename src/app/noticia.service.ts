import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class Noticia {
  constructor(public id: number, public title: string, public description: string,
  public body: string, public image: string) { }
}

const NOTICIAS = [
  new Noticia(11,  'Redución de interacción con la marca',
    'Los usuarios están interactuando menos con su marca.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'interacion.png'
  ),
  new Noticia(12,
    'Mejore sus mensajes',
    'Sus usuarios interactuan 12 segundos con los mensajes que publicas. Lo óptimo son 1 minuto.',
    'Cras eget magna porttitor, porta orci sit amet, venenatis magna.',
    'usuariosactivos.png'
  ),
  new Noticia(13, 'Mundial',
    'En google se busca información sobre el Mundial, deberías publicar temas relacionados Mundial y DLT e Inteligencia Artificial.',
    'Lorem ipsum dolor sit amet, orta orci sit amet, venenatis magna.',
    '13.jpg'
  ),
  new Noticia(14, 'Posicionamiento de marca',
    'Su huella digital a disminuido en un 87%.',
    'Lonsectetur adipiscing elit, venenatis magna.',
    '2.png')
];

@Injectable()
export class NoticiaService {
  getNoticias() { return of(NOTICIAS); }

  getNoticia(id: number | string) {
    return this.getNoticias().pipe(
      map(noticias => noticias.find(noticia => noticia.id === +id))
    );
  }
}
