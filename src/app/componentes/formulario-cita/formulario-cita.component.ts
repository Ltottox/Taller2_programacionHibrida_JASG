import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Cita } from '../../modelos/cita.model';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FormularioCitaComponent {
  @Output() citaAgregada = new EventEmitter<Cita>();

  frase: string = '';
  autor: string = '';
  errorFormulario: string = '';

  onSubmit() {
    this.errorFormulario = '';

    if (!this.frase || this.frase.trim().length < 5) {
      this.errorFormulario = 'La frase debe tener al menos 5 caracteres';
      return;
    }

    if (!this.autor || this.autor.trim().length < 2) {
      this.errorFormulario = 'El autor debe tener al menos 2 caracteres';
      return;
    }

    this.citaAgregada.emit({
      frase: this.frase.trim(),
      autor: this.autor.trim()
    });

    this.frase = '';
    this.autor = '';
  }
}