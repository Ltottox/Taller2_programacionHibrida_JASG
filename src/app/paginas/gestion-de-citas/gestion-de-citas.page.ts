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
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FormularioCitaComponent
  ]
})
export class GestionDeCitasPage implements OnInit {
  citas: Cita[] = [];

  constructor(private citaService: CitaService) {
    addIcons({ trash });
  }

  async ngOnInit() {
    await this.cargarCitas();
  }

  async cargarCitas() {
    this.citas = await this.citaService.getAllCitas();
  }

  async onCitaAgregada(cita: Cita) {
    await this.citaService.addCita(cita);
    await this.cargarCitas();
  }

  async eliminarCita(id: number) {
    await this.citaService.deleteCita(id);
    await this.cargarCitas();
  }
}