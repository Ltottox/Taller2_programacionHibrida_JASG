import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TarjetaCitaComponent } from "../componentes/tarjeta-cita/tarjeta-cita.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TarjetaCitaComponent],
})
export class HomePage {
  constructor() {}
}
