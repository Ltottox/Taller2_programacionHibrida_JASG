import { Injectable } from '@angular/core';
import { Cita } from '../modelos/cita.model';

@Injectable({
  providedIn: 'root',
})
export class CitaService {

  private _citas: Cita [] = [
    { id: 1, frase: 'El único modo de hacer un gran trabajo es amar lo que haces', autor: 'Steve Jobs' },
    { id: 2, frase: 'La innovación distingue al líder del seguidor', autor: 'Steve Jobs' },
    { id: 3, frase: 'La vida es lo que te pasa mientras estás ocupado haciendo otros planes', autor: 'John Lennon' }
  ];

  getRandomCita(): Cita {
    const randomIndex = Math.floor(Math.random() * this._citas.length);
    return this._citas[randomIndex];
  }

  getAllCitas(): Cita[] {
    return [...this._citas];// Retorna una copia del array de citas, los 3 puntos son el operador spread, sirve para copiar los elementos de un array a otro.
  }

  addCita(cita: Cita): void {
    const newId = Math.max(...this._citas.map(q => q.id || 0)) + 1;
    this._citas.push({ ...cita, id: newId });
  }

  deleteCita(id: number): void {
    this._citas = this._citas.filter(q => q.id !== id);
  }
}
