import { Recette } from './../recette.modele';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css']
})
export class ListeRecettesComponent implements OnInit {
  recettes: Recette[] =
  // tslint:disable-next-line:max-line-length
  [new Recette('Charlotte aux fraises', 'La charlotte aux fraises est un dessert fruité,gourmand et distingué.', 'https://static.750g.com/images/622-auto/14fb7209367d61ed00418436dec1f7e2/thinkstockphotos-483666730.jpg')];

  constructor() { }

  ngOnInit() {
  };

}
