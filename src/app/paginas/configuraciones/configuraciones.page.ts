// src/app/paginas/configuraciones/configuraciones.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ConfiguracionService } from '../../servicios/configuracion.service';
import { Configuracion } from '../../modelos/configuracion.model';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class ConfiguracionesPage implements OnInit {
  // Objeto con la configuración actual
  configuracion: Configuracion = {
    permitirBorrarDesdeInicio: false
  };

  constructor(private configuracionService: ConfiguracionService) {}

  async ngOnInit() {
    // Cargar configuración guardada al entrar a la página
    this.configuracion = await this.configuracionService.getConfiguracion();
  }

  // Guardar automáticamente cuando el usuario cambia el toggle
  async onConfigChange() {
    await this.configuracionService.guardarConfiguracion(this.configuracion);
    console.log('Configuración guardada:', this.configuracion);
  }
}


