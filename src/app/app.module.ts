

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { RecettesComponent} from './livre-recettes/recettes.component';
import { HeaderComponent } from './header/header.component';
import { ListeRecettesComponent } from './livre-recettes/liste-recettes/liste-recettes.component';
import { DetailRecetteComponent } from './livre-recettes/detail-recette/detail-recette.component';
import { RecetteComponent } from './livre-recettes/liste-recettes/element-liste-recette/recette.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { ListeCoursesEditeurComponent } from './liste-courses/liste-courses-editeur/liste-courses-editeur.component';

@NgModule({
  declarations: [
    AppComponent,
    RecettesComponent,
    HeaderComponent,
    ListeRecettesComponent,
    DetailRecetteComponent,
    RecetteComponent,
    ListeCoursesComponent,
    ListeCoursesEditeurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
