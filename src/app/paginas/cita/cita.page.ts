import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TarjetaCitaComponent } from '../../componentes/tarjeta-cita/tarjeta-cita.component';
import { Cita } from '../../modelos/cita.model';
import { CitaService } from '../../servicios/cita.service';
import { addIcons } from 'ionicons';
import { refresh, trash } from 'ionicons/icons';
import { ConfiguracionService } from '../../servicios/configuracion.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TarjetaCitaComponent]
})
export class CitaPage implements OnInit {
  citaActual: Cita | null = null;
  permitirBorrarDesdeInicio: boolean = false;

  constructor(
      private citaService: CitaService,
      private configuracionService: ConfiguracionService) {
    addIcons({ refresh,trash });
  }

  async ngOnInit() {
    console.log('Página de inicio cargada');
    
    //Cargar la configuración guardada desde el servicio
    this.permitirBorrarDesdeInicio = await this.configuracionService.getPermitirBorrarDesdeInicio();
    
    this.cargarCitaAleatoria();
  }

  // Carga una cita aleatoria del servicio
  cargarCitaAleatoria() {
    this.citaActual = this.citaService.getRandomCita();
    console.log('Cita cargada:', this.citaActual);
  }

  //metodo para borrar la cita actual
  borrarCitaActual() {
    if (this.citaActual?.id !== undefined && this.permitirBorrarDesdeInicio) {
      this.citaService.deleteCita(this.citaActual.id);
      console.log('Cita borrada:', this.citaActual);
      this.cargarCitaAleatoria();
    }
  }
}

