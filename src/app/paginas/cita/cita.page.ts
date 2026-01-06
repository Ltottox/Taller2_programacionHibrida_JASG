import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';// Importar el componente de la tarjeta de cita de una sola vez
import { TarjetaCitaComponent } from '../../componentes/tarjeta-cita/tarjeta-cita.component';
import { Cita } from '../../modelos/cita.model';
import { CitaService } from '../../servicios/cita.service';
import { addIcons } from 'ionicons';
import { settingsOutline } from  'ionicons/icons';// Importar el icono de configuración
import { refresh, trash } from 'ionicons/icons';// Importar los iconos necesarios
import { ConfiguracionService } from '../../servicios/configuracion.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TarjetaCitaComponent, RouterModule],
})
export class CitaPage implements OnInit {
  citaActual: Cita | null = null;
  permitirBorrarDesdeInicio: boolean = false;

  constructor(
      private citaService: CitaService,
      private configuracionService: ConfiguracionService) {
    addIcons({ settingsOutline, refresh, trash });
  }

 ngOnInit() {
    console.log('Página CITA creada por primera vez');
    this.cargarCitaAleatoria();
  }
// recargar la configuracion al iniciar la pagina
  async ionViewWillEnter() {
  console.log('ionViewWillEnter: Página CITA a punto de mostrarse');
  // Recargar configuración cada vez que se inicia la página
  this.permitirBorrarDesdeInicio = await this.configuracionService.getPermitirBorrarDesdeInicio();
  console.log('Configuración recargada:', this.permitirBorrarDesdeInicio);
}

  // Carga una cita aleatoria del servicio
  cargarCitaAleatoria() {
    this.citaActual = this.citaService.getRandomCita();
    console.log('Cita cargada:', this.citaActual);
  }

  //metodo para borrar la cita actual
borrarCitaActual() {
  if (this.citaActual?.id && this.permitirBorrarDesdeInicio) {
    this.citaService.deleteCita(this.citaActual.id);
    this.cargarCitaAleatoria();
  }
}
}

