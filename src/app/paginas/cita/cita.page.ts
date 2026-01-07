import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TarjetaCitaComponent } from '../../componentes/tarjeta-cita/tarjeta-cita.component';
import { Cita } from '../../modelos/cita.model';
import { CitaService } from '../../servicios/cita.service';
import { ConfiguracionService } from '../../servicios/configuracion.service';
import { Configuracion } from '../../modelos/configuracion.model';
import { addIcons } from 'ionicons';
import { settingsOutline, refresh, trash } from 'ionicons/icons';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, TarjetaCitaComponent]
})
export class CitaPage implements OnInit {
  citaActual: Cita | null = null;
  configuracion: Configuracion = { permitirBorrarDesdeInicio: false };

  constructor(
    private citaService: CitaService,
    private configuracionService: ConfiguracionService
  ) {
    addIcons({ settingsOutline, refresh, trash });
  }

  ngOnInit() {
    this.cargarCitaAleatoria();
  }
// cargar la configuración cada vez que se entra a la pagina
  async ionViewWillEnter() {
    this.configuracion = await this.configuracionService.getConfiguracion();
  }

  cargarCitaAleatoria() {
    this.citaActual = this.citaService.getRandomCita();
  }

  async borrarCitaActual() {
    if (this.citaActual?.id && this.configuracion.permitirBorrarDesdeInicio) {
      await this.citaService.deleteCita(this.citaActual.id);
      this.cargarCitaAleatoria();
    }
  }
}

