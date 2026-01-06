import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormularioCitaComponent } from '../../componentes/formulario-cita/formulario-cita.component';
import { TarjetaCitaComponent } from '../../componentes/tarjeta-cita/tarjeta-cita.component';
import { CitaService } from '../../servicios/cita.service';
import { Cita } from '../../modelos/cita.model';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-gestion-de-citas',  // Selector para <app-gestion-de-citas>
  templateUrl: './gestion-de-citas.page.html',  // HTML de la página
  styleUrls: ['./gestion-de-citas.page.scss'],  // Estilos de la página
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioCitaComponent,  // Componente HIJO
    TarjetaCitaComponent        // Componente HIJO
  ]
})
export class GestionDeCitasPage implements OnInit {
  // ✅ ESTADO de la página (array de citas)
  citas: Cita[] = [];

  constructor(private citaService: CitaService) {
    addIcons({ trash });
  }

  ngOnInit() {
    console.log('Página GESTIONAR inicializada');
    this.cargarCitas();
  }

  // ✅ MÉTODO: Cargar citas desde el servicio
  cargarCitas() {
    this.citas = this.citaService.getAllCitas();
  }

  // ✅ MÉTODO: Recibe evento del hijo FORMULARIO
  onCitaAgregada(nuevaCita: Cita) {
    this.citaService.addCita(nuevaCita);
    this.cargarCitas(); // Actualiza vista
  }

  // ✅ MÉTODO: Elimina cita y actualiza vista
  eliminarCita(id: number) {
    this.citaService.deleteCita(id);
    this.cargarCitas(); // Actualiza vista
  }
}