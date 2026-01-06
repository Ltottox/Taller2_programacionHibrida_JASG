import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TarjetaCitaComponent } from '../../componentes/tarjeta-cita/tarjeta-cita.component';
import { Cita } from '../../modelos/cita.model';
import { CitaService } from '../../servicios/cita.service';
import { addIcons } from 'ionicons';
import { refresh } from 'ionicons/icons';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TarjetaCitaComponent]
})
export class CitaPage implements OnInit {
  citaActual: Cita | null = null;

  constructor(private citaService: CitaService) {
    addIcons({ refresh });
  }

  ngOnInit() {
    console.log('Página de inicio cargada');
    this.cargarCitaAleatoria();
  }

  // Carga una cita aleatoria del servicio
  cargarCitaAleatoria() {
    this.citaActual = this.citaService.getRandomCita();
    console.log('Cita cargada:', this.citaActual);
  }
}

