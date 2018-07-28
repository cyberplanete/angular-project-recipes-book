import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chargeCaracteristique = 'menuRecettes';

  surNavigation(caracteristique: string) {

    this.chargeCaracteristique = caracteristique;
  }
}
