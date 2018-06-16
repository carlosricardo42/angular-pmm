import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './header/header.component';
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Service
import {Noticia,  NoticiaService }  from './noticia.service';

// Routes definition
const appRoutes: Routes = [
  { path: 'noticias/:id',
    component: NoticiaDetailComponent
  },
  {
    path: 'noticias',
    component: ListaNoticiasComponent,
    data: { title: 'Noticias' }
  },
  { path: '',
    redirectTo: '/noticias',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaNoticiasComponent,
    NoticiasComponent,
    HeaderComponent,
    NoticiaDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true }
   )
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
