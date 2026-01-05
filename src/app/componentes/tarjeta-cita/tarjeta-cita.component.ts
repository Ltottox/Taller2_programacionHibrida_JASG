import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tarjeta-cita',
  templateUrl: './tarjeta-cita.component.html',
  styleUrls: ['./tarjeta-cita.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard],
})
export class TarjetaCitaComponent  implements OnInit {
cita: any;

  constructor() { }

  ngOnInit() {}

}
