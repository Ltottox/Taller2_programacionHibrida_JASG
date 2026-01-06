
import { Component, Input } from '@angular/core';  // Importa Input
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Cita } from '../../modelos/cita.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-cita',
  templateUrl: './tarjeta-cita.component.html',
  styleUrls: ['./tarjeta-cita.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonicModule]
})
export class TarjetaCitaComponent {
  // @Input() con el mismo nombre que la propiedad que queremos recibir
  @Input() cita: Cita | null = null;  // Propiedad para recibir la cita
}