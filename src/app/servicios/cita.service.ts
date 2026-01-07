import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Cita } from '../modelos/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citas: Cita[] = [];

  constructor(private databaseService: DatabaseService) {
    // Inicialización al cargar la app
    this.inicializarYBloqueante();
  }

  // Ciclo de vida: Inicializar BD y cargar datos
  private async inicializarYBloqueante(): Promise<void> {
    await this.databaseService.initializeDatabase();
    await this.cargarCitasDesdeBD();
  }

  async cargarCitasDesdeBD(): Promise<void> {
    this.citas = await this.databaseService.getAllCitas();
  }

  getRandomCita(): Cita | null {
    if (this.citas.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * this.citas.length);
    return this.citas[randomIndex];
  }

  async getAllCitas(): Promise<Cita[]> {
    await this.cargarCitasDesdeBD();
    return [...this.citas];
  }

  async addCita(cita: Cita): Promise<void> {
    await this.databaseService.addCita(cita);
    await this.cargarCitasDesdeBD();
  }

  async deleteCita(id: number): Promise<void> {
    await this.databaseService.deleteCita(id);
    await this.cargarCitasDesdeBD();
  }
}