import { Component, EventEmitter, Output } from '@angular/core';

@Component({ selector : 'app-header', templateUrl : 'header.component.html', styleUrls : ['header.component.css'] })
export class HeaderComponent {
// Reception du menu header l'element selectionné . @Output renvoi l'instance vers app.component.html
  @Output() caracteristiqueSelectionne = new EventEmitter<String>();

  siSelectionne (caracteristique: String) {

    this.caracteristiqueSelectionne.emit(caracteristique);

  }


}
