
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';



@Component({
  selector: 'app-gestion-de-citas',
  templateUrl: './gestion-de-citas.page.html',
  styleUrls: ['./gestion-de-citas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonItem, IonLabel, IonInput, ]
})
export class GestionDeCitasPage implements OnInit {
cargarCitaAleatoria: any;

  constructor() { }

  ngOnInit() {
  }

}



