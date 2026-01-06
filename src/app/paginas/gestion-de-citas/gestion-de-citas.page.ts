import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormularioCitaComponent } from '../../componentes/formulario-cita/formulario-cita.component';
import { CitaService } from '../../servicios/cita.service';
import { Cita } from '../../modelos/cita.model';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';


@Component({
  selector: 'app-gestion-de-citas',
  templateUrl: './gestion-de-citas.page.html',
  styleUrls: ['./gestion-de-citas.page.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule, IonicModule, FormularioCitaComponent,RouterModule ]
})
export class GestionDeCitasPage implements OnInit {
  citas: Cita[] = [];

  constructor(private citaService: CitaService) {
    addIcons({ trash });
  }

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citas = this.citaService.getAllCitas();
  }

  onCitaAgregada(cita: Cita) {
    this.citaService.addCita(cita);
    this.cargarCitas();
  }

  eliminarCita(id: number) {
    console.log('Eliminando cita con ID:', id);
    this.citaService.deleteCita(id);
    this.cargarCitas(); // Recargar lista después de eliminar
}