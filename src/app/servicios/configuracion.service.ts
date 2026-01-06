// src/app/servicios/configuracion.service.ts

import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Configuracion } from '../modelos/configuracion.model';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private readonly CLAVE_CONFIG = 'configuracionApp';

  // Obtener configuración guardada (o valores por defecto)
  async getConfiguracion(): Promise<Configuracion> {
    const { value } = await Preferences.get({ key: this.CLAVE_CONFIG });
    
    if (value) {
      return JSON.parse(value);
    }
    
    // Valores por defecto si no existe
    return {
      permitirBorrarDesdeInicio: false
    };
  }

  // Guardar configuración en el dispositivo
  async guardarConfiguracion(config: Configuracion): Promise<void> {
    await Preferences.set({
      key: this.CLAVE_CONFIG,
      value: JSON.stringify(config)
    });
  }

  // Método específico para obtener solo la opción de borrar
  async getPermitirBorrarDesdeInicio(): Promise<boolean> {
    const config = await this.getConfiguracion();
    return config.permitirBorrarDesdeInicio;
  }
}