import { Ingredient } from './../dossierPartagé/ingredient.modele';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.css']
})
export class ListeCoursesComponent implements OnInit {

  ingredients:  Ingredient[] = [new Ingredient('Salade' , 200), new Ingredient('Tomate' , 20)];

  constructor() { }

  ngOnInit() {
  }

}
